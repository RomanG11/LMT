// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

interface INFT {
	function mint(
		address _to,
		uint256 _id,
		uint256 _quantity,
		bytes memory _data
	) external;
}

contract Airdrop {

	address public owner;

	constructor() public {
		owner = msg.sender;
	}

	function airdrop(
		address _nftAddress,
		address[] calldata _to,
		uint256[] calldata _id,
		uint256[] calldata _quantity
	) public {
		require(msg.sender == owner, "onlyOwner");

		INFT nft = INFT(_nftAddress);

		for(uint i = 0; i < _to.length; i++) {
			nft.mint(_to[i], _id[i], _quantity[i], "0x");
		}

	}
}