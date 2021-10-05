// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";

contract Splitter {

	using SafeERC20 for IERC20; 
	address payable public address1;
	address payable public address2;

	constructor(address payable _address1, address payable _address2) {
		address1 = _address1;
		address2 = _address2;
	}

	function split(IERC20 token) public {
		if(address(token) == address(0)) {
			if(address(this).balance > 0) {
				address1.transfer(address(this).balance / 2);
				address1.transfer(address(this).balance);
			}
		}

		uint balance = token.balanceOf(address(this));
		if(balance > 0) {
			token.safeTransfer(address1, balance / 2);
			token.safeTransfer(address2, balance / 2);
		}
	}
}