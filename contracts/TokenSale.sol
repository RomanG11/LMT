// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/erc20/IERC20.sol";

abstract contract LMTBasic is IERC20 {
	function addLocked(address _userAddress, uint _locked) virtual public;
}

contract TokenSale is Ownable {
    
    using SafeMath for uint;

	uint public constant SALE_DURATION = 3 days;
	uint public constant EXCHANGE_RATIO = 8;

	IERC20 public LYM;
	LMTBasic public LMT;

	uint public lymCollected;
	uint public tokensSold;

	// Stage 1
	uint public startDate;

	address public wallet1Receiver;
	address public wallet2Receiver;

	event Bought(address indexed user, uint indexed lymAmount, uint lmtAmount);
	event Claimed(address indexed user, uint lmtAmount);

	constructor(
		address _lymAddress,
		address _lmtAddress,
		uint _startDate,
		address _wallet1Receiver,
		address _wallet2Receiver
	) 
		public 
	{
		startDate = _startDate;

		LYM = IERC20(_lymAddress);
		LMT = LMTBasic(_lmtAddress);
		
		wallet1Receiver = _wallet1Receiver;
		wallet2Receiver = _wallet2Receiver;
	}

	function buy(uint _lymAmount) public {
	    require(startDate < block.timestamp && block.timestamp < startDate + SALE_DURATION, "sale is closed");

		require(LYM.transferFrom(msg.sender, owner(), _lymAmount));
		lymCollected = lymCollected.add(_lymAmount);
		
		uint lmtAmount = _lymAmount.div(EXCHANGE_RATIO);
		LMT.addLocked(msg.sender, lmtAmount);
		LMT.transfer(msg.sender, lmtAmount);

		tokensSold = tokensSold.add(lmtAmount);
		emit Bought(msg.sender, _lymAmount, lmtAmount);
	}

	// -----------------------------------------------
	// --------------Owner functions------------------
	// -----------------------------------------------
	
	function withdrawUnsoldTokens() public onlyOwner {
		require(block.timestamp > startDate + SALE_DURATION, "not a finish time");

		uint balance = LMT.balanceOf(address(this));

		LMT.transfer(wallet1Receiver, balance/3);
		LMT.transfer(wallet2Receiver, balance*2/3);
	}

	function withdrawLostTokens(address _tokenAddress) public onlyOwner {
		require(block.timestamp > startDate + SALE_DURATION, "not a finish time");
		require(_tokenAddress != address(LMT), "can't withdraw LMT");

		if(_tokenAddress == address(0)) {
			msg.sender.transfer(address(this).balance);
			return;
		}

		IERC20(_tokenAddress).transfer(msg.sender, IERC20(_tokenAddress).balanceOf(address(this)));
	}
}