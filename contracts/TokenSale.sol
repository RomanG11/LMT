// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/erc20/IERC20.sol";

contract TokenSale is Ownable {
    
    using SafeMath for uint;

	uint public constant SALE_DURATION = 1 days;

	IERC20 public LYM;
	IERC20 public LMT;

	uint public lymCollected;
	uint public tokensSold;

	// Stage 1
	uint public startDate;
	uint public EXCHANGE_RATIO = 8;
	mapping(address => uint) public balances;
	mapping(address => uint) public claimed;
	
	uint public lmtTokensLocked;

	address public wallet1Receiver;
	address public wallet2Receiver;

	event Bought(address indexed user, uint indexed stage, uint indexed lymAmount);
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
		LMT = IERC20(_lmtAddress);
		
		wallet1Receiver = _wallet1Receiver;
		wallet2Receiver = _wallet2Receiver;
	}

	function buy(uint _lymAmount) public {
	    require(startDate < block.timestamp && block.timestamp < startDate + SALE_DURATION, "sale is closed");

		require(LYM.transferFrom(msg.sender, owner(), _lymAmount));
		lymCollected = lymCollected.add(_lymAmount);
		
		uint toSend = _lymAmount.div(EXCHANGE_RATIO).div(2);
		LMT.transfer(msg.sender, toSend);
		balances[msg.sender] = balances[msg.sender].add(toSend);
		lmtTokensLocked = lmtTokensLocked.add(toSend);
		tokensSold = tokensSold.add(toSend.mul(2));
		emit Bought(msg.sender, 1, _lymAmount);
	}

	function claim() public {
		uint toClaim = tokensToClaim(msg.sender);
		claimed[msg.sender] = claimed[msg.sender].add(toClaim);
		
		require(toClaim > 0, "nothing to claim");
		LMT.transfer(msg.sender, toClaim);
        lmtTokensLocked = lmtTokensLocked.sub(toClaim);

		emit Claimed(msg.sender, toClaim);
	}

	function tokensToClaim(address _userAddress) public view returns(uint res) {
		uint userBalance = balances[_userAddress];
		if(userBalance == 0) {
			return 0;
		}

		uint distributionStartTime = getDistributionStartTime();

		for(uint i = distributionStartTime; i < getDistributionEndTime(); i+= 1 weeks) {
            if(i > block.timestamp) {
                break;
            }
			res = res.add(userBalance).div(10);
		}

		res = res.sub(claimed[_userAddress]);
	}
	
	function getRemainingTokens(address _userAddress) public view returns(uint) {
	    return balances[_userAddress].sub(claimed[_userAddress]);
	}

	function getCurrentExchangeRate() public view returns(uint) {
		if(startDate < block.timestamp && block.timestamp < startDate + SALE_DURATION) {
			return EXCHANGE_RATIO;
		}
		
		return 0;
	}
	
	function getDistributionStartTime() public view returns(uint) {
	    return startDate + SALE_DURATION + 1 weeks;
	}
	
	function getDistributionEndTime() public view returns(uint) {
	    return getDistributionStartTime() + 10 weeks;
	}
	
	// -----------------------------------------------
	// --------------Owner functions------------------
	// -----------------------------------------------
	
	function withdrawUnsoldTokens() public onlyOwner {
		require(block.timestamp > startDate + SALE_DURATION, "not a finish time");

		uint balance = LMT.balanceOf(address(this));
		uint toTransfer = balance.sub(lmtTokensLocked);

		LMT.transfer(wallet1Receiver, toTransfer/3);
		LMT.transfer(wallet2Receiver, toTransfer*2/3);
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