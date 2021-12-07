// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface IERC1155 {
  function balanceOf(address _owner, uint256 _id) external view returns (uint256);
  function burn(address _owner, uint256 _id, uint256 _value) external;
  function safeTransferFrom(address _from, address _to, uint256 _id, uint256 _value, bytes calldata _data) external;
  function safeBatchTransferFrom(address _from, address _to, uint256[] calldata _ids, uint256[] calldata _values, bytes calldata _data) external;
}

interface ILootBox {
  function onERC1155BatchReceived(address _operator, address _from, uint256[] calldata _ids, uint256[] calldata _values, bytes calldata _data) external returns(bytes4);
}

contract LootBox is Ownable {
  using SafeERC20 for IERC20;

  IERC1155 public nft;
  mapping(uint => uint) public lootboxTokens;
  mapping(address => bool) public isSystemAddress;
  uint lastId = 1;

  uint public lootboxTokenId;
  uint public tokensPerLootBox;
  uint public lootboxOpened;

  IERC20 public chihuaToken;
  uint public price;
  address public tokenHolder;
  uint seed;

  struct DistributionToken {
    address tokenAddress;
    uint minAmount;
    uint maxAmount;
  }

  DistributionToken[] public distributionTokens;

  modifier systemOnly() {
    require(isSystemAddress[msg.sender]);
    _;
  }

  // _proxyRegistryAddress - 0xa5409ec958c83c3f309868babaca7c86dcb077c1
  constructor(address _JGNNFT, uint _lootboxTokenId, uint _tokensPerLootBox) {
    nft = IERC1155(_JGNNFT);
    lootboxTokenId = _lootboxTokenId;
    tokensPerLootBox = _tokensPerLootBox;
  }

  function setSystemAddresses(address[] calldata _addresses, bool[] calldata _statuses) public onlyOwner {
    for(uint i = 0; i < _addresses.length; i++) {
      isSystemAddress[_addresses[i]] = _statuses[i];
    }
  }

  function setData(IERC20 _chihuaToken, uint _price, address _tokenHolder) public onlyOwner {
    //0x775b4c20946d2a747E7272581282D7047739767E
    chihuaToken = _chihuaToken;
    //50e18
    price = _price;
    tokenHolder = _tokenHolder;
  }

  function addDistributionToken(address _tokenAddress, uint _minAmount, uint _maxAmount) public onlyOwner {
    distributionTokens.push(DistributionToken({tokenAddress: _tokenAddress, minAmount: _minAmount, maxAmount: _maxAmount}));
  }
  
  function buyLootBox(uint amount) public {
      chihuaToken.safeTransferFrom(msg.sender, owner(), amount * price);
      nft.safeTransferFrom(tokenHolder, msg.sender, lootboxTokenId, amount, "0x");
  }

  function addTokensToLootbox(uint[] calldata _tokenIds) public onlyOwner {
    for(uint i = 0; i < _tokenIds.length; i++) {
      lootboxTokens[lastId] = _tokenIds[i];
      lastId++;
    }
  }

  function replaceTokenFromLootbox(uint _id, uint _tokenId) public onlyOwner {
    require(_id < lastId, "function only for replacement");
    lootboxTokens[_id] = _tokenId;
  }

  function buyAndUnpack(uint amount) public systemOnly {

  }
  
  function unpack(uint amount) public {
    require(msg.sender == tx.origin, "can be used only by address");
    require(amount > 0, "amount should be more than 0");
    require(nft.balanceOf(msg.sender, lootboxTokenId) >= amount, "exceed user amount");

    nft.burn(msg.sender, lootboxTokenId, amount);
            
    uint tokenId;
    uint balance;

    for(uint k = 0; k < amount; k++) {
      uint[] memory tokens = new uint[](tokensPerLootBox);
      uint[] memory amounts = new uint[](tokensPerLootBox);
      
      // uint randomNumber;
      bool done;

      for(uint i = 0; i < tokensPerLootBox; i++) {
        done = false;
        for(uint j = 0; j < 20; j++) {
          tokenId = lootboxTokens[(randomUINT256() % (lastId - 1)) + 1];
          if(nft.balanceOf(address(this), tokenId) > 0) {
            done = true;
            break;
          }
        }

        if(!done) {
          for(uint m = 1; m < lastId; m++) {
            if(nft.balanceOf(address(this), lootboxTokens[m]) > 0) {
              tokenId = lootboxTokens[m];
              break;
            }
          }
        }

        require(nft.balanceOf(address(this), tokenId) > 0, "lootbox is empty");
        tokens[i] = tokenId;
        amounts[i] = 1; 
      }

      for(uint i = 0; i < tokens.length; i++) {
        nft.safeTransferFrom(address(this), msg.sender, tokens[i], 1, "0x");
      }
    }

    lootboxOpened += amount;
  }

  
  function randomUINT256() private returns (uint) {
    seed++;
    return uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty, seed)));
  }

  function onERC1155BatchReceived(address _operator, address _from, uint256[] calldata _ids, uint256[] calldata _values, bytes calldata _data) external returns(bytes4) {
    return ILootBox.onERC1155BatchReceived.selector; 
  }

  function emergencyWithdraw(address tokenAddress) public onlyOwner {
    uint balance = IERC20(tokenAddress).balanceOf(address(this));
    IERC20(tokenAddress).transfer(owner(), balance);
  }

  function emergencyWithdrawNFT(uint[] memory tokens, uint[] memory amounts) public onlyOwner {
    JGNNFT.safeBatchTransferFrom(address(this), msg.sender, tokens, amounts, "0x");
  }
  
}