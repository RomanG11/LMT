// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC721Tradable.sol";

contract NFT is ERC721Tradable {

	address public verifyAddress;
	uint public lastTokenId = 10000;
	
	string public contractURI;

	string internal _baseTokenURI;

	mapping(address => bool) public operators;
	mapping(address => uint) public allowedToMint;
	mapping(address => uint) public minted;

	constructor(
		address _proxyRegistryAddress,
		address _verifyAddress,
		string memory _name,
		string memory _symbol,
		string memory _contractURI,
		string memory __baseTokenURI,
		address[] memory _operators
	) ERC721Tradable(_name, _symbol, _proxyRegistryAddress)
	{
		verifyAddress = _verifyAddress;
		contractURI = _contractURI;
		_baseTokenURI = __baseTokenURI;

		for(uint i = 0; i < _operators.length; i++) {
			operators[_operators[i]] = true;
		}
	}
	
	function baseTokenURI() public view override returns(string memory) {
	    // write base URI here
	    // https://api.lympo.io/pools/assets/62 - without token index
        return _baseTokenURI;
	}
	
	function _baseURI() internal view override returns(string memory) {
	    // write base URI here
	    // https://api.lympo.io/pools/assets/62 - without token index
        return _baseTokenURI;
    }

    function updateBaseURI(string memory __baseURI) public onlyOwner {
    	_baseTokenURI = __baseURI;
    }

	function updateOperator(address _operatorAddress, bool _status) public onlyOwner {
		operators[_operatorAddress] = _status;
	}

	function changeVerifyAddress(address _newVerifyAddress) public {
		require(operators[msg.sender], "only operators");
		verifyAddress = _newVerifyAddress;
	}

	function changeLastTokenId(uint _lastTokenId) public {
		require(operators[msg.sender], "only operators");
		lastTokenId = _lastTokenId;
	}

	function mint(address _to, uint _tokenId) public {
		require(_tokenId > 0 && _tokenId <= lastTokenId, "token is not exists");
		require(operators[msg.sender], "only operators");
		_safeMint(_to, _tokenId);
	}

	function mintBatch(address _to, uint[] memory _tokenIds) public {
		require(operators[msg.sender], "only operators");
		for(uint i = 0; i < _tokenIds.length; i++) {
			require(_tokenIds[i] > 0 && _tokenIds[i] <= lastTokenId, "token is not exists");
			_safeMint(_to, _tokenIds[i]);
		}
	}

	function mintBySig(address _to, uint _tokenId, uint _allowedToMint, bytes memory _signature) public {
		require(_tokenId > 0 && _tokenId <= lastTokenId, "token is not exists");
		require(verify(_allowedToMint, _signature), "invalid signature");
		
		allowedToMint[msg.sender] = _allowedToMint;
		require(minted[msg.sender] < _allowedToMint, "exceed mint limit");
		minted[msg.sender]++;
		_safeMint(_to, _tokenId);
	}

	/// signature methods.
	function verify(uint _allowedToMint, bytes memory _signature) internal view returns(bool) {
		require(verifyAddress != address(0), "verify address is not set");		
		bytes32 message = prefixed(keccak256(abi.encodePacked(msg.sender, _allowedToMint, address(this))));
        return (recoverSigner(message, _signature) == verifyAddress);
	}

    function recoverSigner(bytes32 message, bytes memory sig)
        internal
        pure
        returns (address)
    {
        (uint8 v, bytes32 r, bytes32 s) = abi.decode(sig, (uint8, bytes32, bytes32));

        return ecrecover(message, v, r, s);
    }

    /// builds a prefixed hash to mimic the behavior of eth_sign.
    function prefixed(bytes32 hash) internal pure returns (bytes32) {
        return keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", hash));
    }
}