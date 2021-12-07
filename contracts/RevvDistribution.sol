// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

interface IERC721 {
	function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external;
}

contract ERC721Airdrop {
	address public owner;

	constructor() public {
		owner = msg.sender;
	}

	function airdrop(address _NFTAddress, address _from, address[] calldata _to, uint[] calldata _ids) public {
		require(msg.sender == owner, "onlyOwner");
		IERC721 nft = IERC721(_NFTAddress);
		for(uint i = 0; i < _to.length; i++) {
			nft.transferFrom(_from, _to[i], _ids[i]);
		}
	}
}

contract RevvDistribution {

	IERC721 public nft;
	address public owner;
	address public from;
	mapping(address => bool) public operators;

	event OperatorsChanged(address operator, bool status);

	/*

	0 ALEXANDRA TRUSOVA
	1 ANISSA MEKSEN
	2 TONY G
	3 ANTONY PETTIS
	4 COLIN DAGBA
	5 DARYA KLISHINA
	6 EDDIE HALL
	7 SERGEJ MASLOBOJEV
	8 RHIANON LOVELACE
	9 ROSE NAMAJUNAS
	10 SAMUEL MAXWELL
	11 BIG Z
	12 MOUSSA DIABY

	*/
    
    mapping(uint256 => uint256) public baseIndex;
	mapping(uint256 => uint256) public currentIndex;
	

	constructor() public {
		owner = msg.sender;
		operators[msg.sender] = true;
		nft = IERC721(0x51Ac4A13054D5d7e1FA795439821484177e7E828);
		from = 0x934dd62782BFe4a8E3f096E014266e5F5adc1b2a;

		emit OperatorsChanged(msg.sender, true);
		
		baseIndex[0] = 57910179610855902944441410020149597549066096953224468139819900761376307576299;
		baseIndex[1] = 57910179610855903044875037786336489770438727724547130797457588154275836494791;
		baseIndex[2] = 57910179610855903145308665552523381991811358495869793455095275547175365413283;
		baseIndex[3] = 57910179610855903245742293318710274213183989267192456112732962940074894331775;
		baseIndex[4] = 57910179610855903346175921084897166434556620038515118770370650332974423250267;
		baseIndex[5] = 57910179610855903446609548851084058655929250809837781428008337725873952168759;
		baseIndex[6] = 57910179610855903547043176617270950877301881581160444085646025118773481087251;
		baseIndex[7] = 57910179610855904049211315448205411984165035437773757373834462083271125673711;
		baseIndex[8] = 57910179610855903747910432149644735320047143123805769400921399904572538924235;
		baseIndex[9] = 57910179610855903848344059915831627541419773895128432058559087297472067842727;
		baseIndex[10] = 57910179610855903948777687682018519762792404666451094716196774690371596761219;
		baseIndex[11] = 57910179610855904250078570980579196426910296980419082689109836869070183513695;
		baseIndex[12] = 57910179610855908468290937160428670170997964119273238319816092121556072816756;

		currentIndex[0] = 57910179610855902944441410020149597549066096953224468139819900761376307577772;
		currentIndex[1] = 57910179610855903044875037786336489770438727724547130797457588154275836494875;
		currentIndex[2] = 57910179610855903145308665552523381991811358495869793455095275547175365413507;
		currentIndex[3] = 57910179610855903245742293318710274213183989267192456112732962940074894331896;
		currentIndex[4] = 57910179610855903346175921084897166434556620038515118770370650332974423250367;
		currentIndex[5] = 57910179610855903446609548851084058655929250809837781428008337725873952168900;
		currentIndex[6] = 57910179610855903547043176617270950877301881581160444085646025118773481087361;
		currentIndex[7] = 57910179610855904049211315448205411984165035437773757373834462083271125673861;
		currentIndex[8] = 57910179610855903747910432149644735320047143123805769400921399904572538924317;
		currentIndex[9] = 57910179610855903848344059915831627541419773895128432058559087297472067842923;
		currentIndex[10] = 57910179610855903948777687682018519762792404666451094716196774690371596761299;
		currentIndex[11] = 57910179610855904250078570980579196426910296980419082689109836869070183513820;
		currentIndex[12] = 57910179610855908468290937160428670170997964119273238319816092121556072816843;

	}

	function setFrom(address _from) public {
		require(msg.sender == owner, "onlyOwner");
		from = _from;
	}

	function setCurrentIndex(uint _index, uint _id) public {
		require(msg.sender == owner, "onlyOwner");
		currentIndex[_index] = _id;
	}

	function changeOperator(address _address, bool _status) public {
		require(msg.sender == owner, "onlyOwner");
		operators[_address] = _status;

		emit OperatorsChanged(_address, _status);
	}

	function distribute(address[] calldata _to, uint[] calldata _indexes) public {
		require(operators[msg.sender], "only operators");

		for(uint i = 0; i < _to.length; i++) {
			uint id = currentIndex[_indexes[i]];
			currentIndex[_indexes[i]]++;
			nft.transferFrom(from, _to[i], id);
		}
	}
	
	
	function totalSupply(uint cardId) public view returns(uint) {
	    return currentIndex[cardId] - baseIndex[cardId];
	}
	
	function maxSupply(uint cardId) public view returns(uint) {
	    return baseIndex[cardId] + 1499;
	}
	
	function mint(address _to, uint256 _id, uint256 _amount, bytes memory _data) public {
	    require(operators[msg.sender], "only operators");
	    
	    uint id = currentIndex[_id];
		currentIndex[_id]++;
		nft.transferFrom(from, _to, id);
	}
	

	function airdrop(address _from, address[] calldata _to, uint[] calldata _ids) public {
		require(msg.sender == owner, "onlyOwner");
		for(uint i = 0; i < _to.length; i++) {
			nft.transferFrom(_from, _to[i], _ids[i]);
		}
	}
}