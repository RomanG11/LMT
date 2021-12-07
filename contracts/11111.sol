
// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;

contract Distribution {
    
    address payable owner;
    
    constructor() public {
        owner = msg.sender;
    }
    
    receive() external payable {
        
    }
    
    function distribute(address payable[] memory to) public payable {
        for(uint i = 0; i < to.length; i++) {
            to[i].transfer(0.05e18);
        }
    }
}