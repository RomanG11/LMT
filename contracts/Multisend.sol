// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Multisend {
	function multisend(IERC20 token, address[] calldata to, uint[] calldata amounts) public {
	    for(uint i = 0; i < to.length; i++) {
	    	token.transferFrom(msg.sender, to[i], amounts[i]);
	    }
	}
}