// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestToken is ERC20 {

// 	uint public locked = 10000000000000000000; //10
	
	constructor(string memory name, string memory symbol, uint forMint) public ERC20(name, symbol) {
		_mint(msg.sender, forMint);
	}
	
	function claimTokens(uint amount) public {
	    _mint(msg.sender, amount);
	}

// 	function setLocked(uint _locked) public {
// 		locked = _locked;
// 	}
	

// 	function getLocked(address _userAddress) public view returns(uint) {
// 		return locked;
// 	}
}