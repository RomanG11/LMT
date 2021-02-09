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

	// Stage 1
	uint public startDateStage1;
	uint public EXCHANGE_RATIO_STAGE_1 = 8;
	mapping(address => uint) public balancesStage1;
	mapping(address => uint) public claimedStage1;
	
	// Stage 2
	uint public startDateStage2;
	uint public EXCHANGE_RATIO_STAGE_2 = 12;
	mapping(address => uint) public balancesStage2;
	mapping(address => uint) public claimedStage2;

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
		startDateStage1 = _startDate;
		startDateStage2 = _startDate + SALE_DURATION + 1 weeks;

		LYM = IERC20(_lymAddress);
		LMT = IERC20(_lmtAddress);
		
		wallet1Receiver = _wallet1Receiver;
		wallet2Receiver = _wallet2Receiver;
	}

	function buy(uint _lymAmount) public {
		require(LYM.transferFrom(msg.sender, address(this), _lymAmount));
		
		if(startDateStage1 < block.timestamp && block.timestamp < startDateStage1 + SALE_DURATION) {
			uint toSend = _lymAmount.div(EXCHANGE_RATIO_STAGE_1).div(2);
			LMT.transfer(msg.sender, toSend);
			balancesStage1[msg.sender] = balancesStage1[msg.sender].add(toSend);
			lmtTokensLocked = lmtTokensLocked.add(toSend);
			emit Bought(msg.sender, 1, _lymAmount);
			return;
		}

		if(startDateStage2 < block.timestamp && block.timestamp < startDateStage2 + SALE_DURATION) {
			uint toSend = _lymAmount.div(EXCHANGE_RATIO_STAGE_2).div(2);
			LMT.transfer(msg.sender, toSend);
			balancesStage2[msg.sender] = balancesStage2[msg.sender].add(toSend);
			lmtTokensLocked = lmtTokensLocked.add(toSend);
			emit Bought(msg.sender, 2, _lymAmount);
			return;
		}

		revert("not a sale time");
	}

	function claim() public {
		uint toClaimStage1 = calculateTokensToClaimStage1(msg.sender);
		claimedStage1[msg.sender] = claimedStage1[msg.sender].add(toClaimStage1);
		
		uint toClaimStage2 = calculateTokensToClaimStage2(msg.sender);
		claimedStage2[msg.sender] = claimedStage2[msg.sender].add(toClaimStage2);
		
		uint toClaim = toClaimStage1.add(toClaimStage2);

		require(toClaim > 0, "nothing to claim");
		LMT.transfer(msg.sender, toClaim);
        lmtTokensLocked = lmtTokensLocked.sub(toClaim);

		emit Claimed(msg.sender, toClaim);
	}

	function tokensToClaim(address _userAddress) public view returns(uint) {
		return calculateTokensToClaimStage1(_userAddress).add(calculateTokensToClaimStage2(_userAddress));
	}

	function calculateTokensToClaimStage1(address _userAddress) public view returns(uint res) {
		uint userBalance = balancesStage1[_userAddress];
		if(userBalance == 0) {
			return 0;
		}

		uint distributionStartTime = startDateStage1 + SALE_DURATION + 1 weeks;

		for(uint i = distributionStartTime; i < distributionStartTime + 10 weeks; i+= 1 weeks) {
            if(i > block.timestamp) {
                break;
            }
			res+= userBalance/10;
		}

		res-= claimedStage1[_userAddress];
	}

	function calculateTokensToClaimStage2(address _userAddress) public view returns(uint res) {
		uint userBalance = balancesStage2[_userAddress];
		if(userBalance == 0) {
			return 0;
		}

		uint distributionStartTime = startDateStage2 + SALE_DURATION + 1 weeks;

		for(uint i = distributionStartTime; i < distributionStartTime + 10 weeks; i+= 1 weeks) {
			if(i > block.timestamp) {
                break;
            }
            res+= userBalance/10;
		}

		res-= claimedStage2[_userAddress];
	}
	
	// -----------------------------------------------
	// --------------Owner functions------------------
	// -----------------------------------------------
	
	function withdrawUnsoldTokens() public onlyOwner {
		require(block.timestamp > startDateStage2 + SALE_DURATION, "not a finish time");

		uint balance = LMT.balanceOf(address(this));
		uint toTransfer = balance.sub(lmtTokensLocked);

		LMT.transfer(wallet1Receiver, toTransfer/3);
		LMT.transfer(wallet2Receiver, toTransfer*2/3);
	}

	function withdrawLostTokens(address _tokenAddress) public onlyOwner {
		require(block.timestamp > startDateStage2 + SALE_DURATION, "not a finish time");
		require(_tokenAddress != address(LMT), "can't withdraw LMT");

		if(_tokenAddress == address(0)) {
			msg.sender.transfer(address(this).balance);
			return;
		}

		IERC20(_tokenAddress).transfer(msg.sender, IERC20(_tokenAddress).balanceOf(address(this)));
	}
}