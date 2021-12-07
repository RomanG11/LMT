/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { Erc1155Tradable } from "./Erc1155Tradable";

export class Erc1155TradableFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _name: string,
    _symbol: string,
    _proxyRegistryAddress: string,
    overrides?: Overrides
  ): Promise<Erc1155Tradable> {
    return super.deploy(
      _name,
      _symbol,
      _proxyRegistryAddress,
      overrides || {}
    ) as Promise<Erc1155Tradable>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _proxyRegistryAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _proxyRegistryAddress,
      overrides || {}
    );
  }
  attach(address: string): Erc1155Tradable {
    return super.attach(address) as Erc1155Tradable;
  }
  connect(signer: Signer): Erc1155TradableFactory {
    return super.connect(signer) as Erc1155TradableFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Erc1155Tradable {
    return new Contract(address, _abi, signerOrProvider) as Erc1155Tradable;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string"
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string"
      },
      {
        internalType: "address",
        name: "_proxyRegistryAddress",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_approved",
        type: "bool"
      }
    ],
    name: "ApprovalForAll",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "MinterAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "MinterRemoved",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
      }
    ],
    name: "TransferBatch",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "TransferSingle",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_uri",
        type: "string"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "URI",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "WhitelistAdminAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "WhitelistAdminRemoved",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "addMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "addWhitelistAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_owners",
        type: "address[]"
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      }
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "creators",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "isMinter",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "isOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "isWhitelistAdmin",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceWhitelistAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        internalType: "bool",
        name: "_approved",
        type: "bool"
      }
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceID",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "tokenMaxSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "tokenSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "removeWhitelistAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "removeMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "maxSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_newBaseMetadataURI",
        type: "string"
      }
    ],
    name: "setBaseMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxSupply",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_initialSupply",
        type: "uint256"
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "create",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_quantity",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "_operator",
        type: "address"
      }
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "isOperator",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x608060405260006007553480156200001657600080fd5b5060405162002bad38038062002bad8339810160408190526200003991620003a0565b60006200004562000110565b600380546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350620000a7620000a162000110565b62000114565b620000bb620000b562000110565b62000166565b8251620000d090600b9060208601906200025d565b508151620000e690600c9060208501906200025d565b50600680546001600160a01b0319166001600160a01b039290921691909117905550620004a29050565b3390565b6200012f816004620001b860201b62000d751790919060201c565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b62000181816005620001b860201b62000d751790919060201c565b6040516001600160a01b038216907f22380c05984257a1cb900161c713dd71d39e74820f1aea43bd3f1bdd2096129990600090a250565b620001c4828262000212565b15620001ed5760405162461bcd60e51b8152600401620001e49062000429565b60405180910390fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b60006001600160a01b0382166200023d5760405162461bcd60e51b8152600401620001e49062000460565b506001600160a01b03166000908152602091909152604090205460ff1690565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002a057805160ff1916838001178555620002d0565b82800160010185558215620002d0579182015b82811115620002d0578251825591602001919060010190620002b3565b50620002de929150620002e2565b5090565b5b80821115620002de5760008155600101620002e3565b600082601f8301126200030a578081fd5b81516001600160401b038082111562000321578283fd5b6040516020601f8401601f191682018101838111838210171562000343578586fd5b806040525081945083825286818588010111156200036057600080fd5b600092505b8383101562000384578583018101518284018201529182019162000365565b83831115620003965760008185840101525b5050505092915050565b600080600060608486031215620003b5578283fd5b83516001600160401b0380821115620003cc578485fd5b620003da87838801620002f9565b94506020860151915080821115620003f0578384fd5b50620003ff86828701620002f9565b604086015190935090506001600160a01b03811681146200041e578182fd5b809150509250925092565b6020808252601f908201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604082015260600190565b60208082526022908201527f526f6c65733a206163636f756e7420697320746865207a65726f206164647265604082015261737360f01b606082015260800190565b6126fb80620004b26000396000f3fe608060405234801561001057600080fd5b50600436106101d85760003560e01c8063869f759411610104578063aa271e1a116100a2578063cd53d08e11610071578063cd53d08e146103ca578063e985e9c5146103dd578063f242432a146103f0578063f2fde38b14610403576101d8565b8063aa271e1a1461037e578063b09ddf7b14610391578063bb5f747b146103a4578063bd85b039146103b7576101d8565b806395d89b41116100de57806395d89b4114610348578063983b2d56146103505780639865027514610363578063a22cb4651461036b576101d8565b8063869f7594146103185780638da5cb5b1461032b5780638f32d59b14610340576101d8565b80633092afd51161017c578063715018a61161014b578063715018a6146102d7578063731133e9146102df5780637362d9c8146102f25780637e518ec814610305576101d8565b80633092afd5146102895780634c5a628c1461029c5780634e1273f4146102a45780636897e974146102c4576101d8565b806306fdde03116101b857806306fdde03146102395780630e89341c1461024e5780632693ebf2146102615780632eb2c2d614610274576101d8565b80624221f0146101dd578062fdd58e1461020657806301ffc9a714610219575b600080fd5b6101f06101eb366004611e3f565b610416565b6040516101fd919061263e565b60405180910390f35b6101f0610214366004611c6c565b610428565b61022c610227366004611db9565b610451565b6040516101fd9190612053565b610241610498565b6040516101fd919061208d565b61024161025c366004611e3f565b610526565b6101f061026f366004611e3f565b6105f3565b610287610282366004611b2c565b610605565b005b610287610297366004611ad8565b610683565b6102876106b3565b6102b76102b2366004611cf7565b6106c5565b6040516101fd9190612012565b6102876102d2366004611ad8565b6107bd565b6102876107ea565b6102876102ed366004611c97565b610858565b610287610300366004611ad8565b6108f7565b610287610313366004611e0d565b610927565b6101f0610326366004611e3f565b610957565b610333610969565b6040516101fd9190611f5b565b61022c610978565b61024161099e565b61028761035e366004611ad8565b6109f9565b610287610a29565b610287610379366004611c3b565b610a39565b61022c61038c366004611ad8565b610aa8565b6101f061039f366004611e57565b610ab5565b61022c6103b2366004611ad8565b610be3565b6101f06103c5366004611e3f565b610bf0565b6103336103d8366004611e3f565b610c02565b61022c6103eb366004611af4565b610c1d565b6102876103fe366004611bd5565b610cd1565b610287610411366004611ad8565b610d48565b600a6020526000908152604090205481565b6001600160a01b0382166000908152602081815260408083208484529091529020545b92915050565b60006001600160e01b031982166301ffc9a760e01b148061048257506001600160e01b03198216636cdb3d1360e11b145b1561048f57506001610493565b5060005b919050565b600b805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561051e5780601f106104f35761010080835404028352916020019161051e565b820191906000526020600020905b81548152906001019060200180831161050157829003601f168201915b505050505081565b606061053182610dc1565b6105565760405162461bcd60e51b815260040161054d90612356565b60405180910390fd5b60028054604080516020601f6000196101006001871615020190941685900493840181900481028201810190925282815261044b93909290918301828280156105e05780601f106105b5576101008083540402835291602001916105e0565b820191906000526020600020905b8154815290600101906020018083116105c357829003601f168201915b50505050506105ee84610dde565b610eb5565b60096020526000908152604090205481565b336001600160a01b038616148061062157506106218533610c1d565b61063d5760405162461bcd60e51b815260040161054d90612509565b6001600160a01b0384166106635760405162461bcd60e51b815260040161054d90612306565b61066f85858585610ef8565b61067c8585858585611102565b5050505050565b61068b610978565b6106a75760405162461bcd60e51b815260040161054d9061239b565b6106b0816111dc565b50565b6106c36106be61121e565b611222565b565b606081518351146106e85760405162461bcd60e51b815260040161054d906124bd565b606083516001600160401b038111801561070157600080fd5b5060405190808252806020026020018201604052801561072b578160200160208202803683370190505b50905060005b84518110156107b55760008086838151811061074957fe5b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020600085838151811061077f57fe5b60200260200101518152602001908152602001600020548282815181106107a257fe5b6020908102919091010152600101610731565b509392505050565b6107c5610978565b6107e15760405162461bcd60e51b815260040161054d9061239b565b6106b081611222565b6107f2610978565b61080e5760405162461bcd60e51b815260040161054d9061239b565b6003546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600380546001600160a01b0319169055565b61086361038c61121e565b61087f5760405162461bcd60e51b815260040161054d90612275565b6000838152600a60209081526040808320546009909252909120548491116108b95760405162461bcd60e51b815260040161054d90612558565b6108c585858585611264565b6000848152600960205260409020546108de9084611308565b6000948552600960205260409094209390935550505050565b6109026103b261121e565b61091e5760405162461bcd60e51b815260040161054d9061245f565b6106b08161132d565b6109326103b261121e565b61094e5760405162461bcd60e51b815260040161054d9061245f565b6106b08161136f565b6000908152600a602052604090205490565b6003546001600160a01b031690565b6003546000906001600160a01b031661098f61121e565b6001600160a01b031614905090565b600c805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561051e5780601f106104f35761010080835404028352916020019161051e565b610a0461038c61121e565b610a205760405162461bcd60e51b815260040161054d90612275565b6106b081611386565b6106c3610a3461121e565b6111dc565b3360008181526001602090815260408083206001600160a01b038716808552925291829020805460ff191685151517905590519091907f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3190610a9c908590612053565b60405180910390a35050565b600061044b6004836113c8565b6000610ac26103b261121e565b610ade5760405162461bcd60e51b815260040161054d9061245f565b86861115610afe5760405162461bcd60e51b815260040161054d906123d0565b6000610b08611410565b9050610b12611426565b600081815260086020526040902080546001600160a01b031916331790558415610b7157807f6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b8787604051610b6892919061205e565b60405180910390a25b8615610bb957610bb933828987878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061126492505050565b60008181526009602090815260408083208a9055600a909152902088905590509695505050505050565b600061044b6005836113c8565b60009081526009602052604090205490565b6008602052600090815260409020546001600160a01b031681565b60065460405163c455279160e01b81526000916001600160a01b039081169190841690829063c455279190610c56908890600401611f5b565b60206040518083038186803b158015610c6e57600080fd5b505afa158015610c82573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ca69190611df1565b6001600160a01b03161415610cbf57600191505061044b565b610cc98484611431565b949350505050565b336001600160a01b0386161480610ced5750610ced8533610c1d565b610d095760405162461bcd60e51b815260040161054d9061219f565b6001600160a01b038416610d2f5760405162461bcd60e51b815260040161054d906120a0565b610d3b8585858561145f565b61067c858585858561153b565b610d50610978565b610d6c5760405162461bcd60e51b815260040161054d9061239b565b6106b08161160d565b610d7f82826113c8565b15610d9c5760405162461bcd60e51b815260040161054d906120eb565b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b6000908152600860205260409020546001600160a01b0316151590565b606081610e0357506040805180820190915260018152600360fc1b6020820152610493565b8160005b8115610e1b57600101600a82049150610e07565b6060816001600160401b0381118015610e3357600080fd5b506040519080825280601f01601f191660200182016040528015610e5e576020820181803683370190505b50905060001982015b8515610eac57600a860660300160f81b82828060019003935081518110610e8a57fe5b60200101906001600160f81b031916908160001a905350600a86049550610e67565b50949350505050565b6060610ef1838360405180602001604052806000815250604051806020016040528060008152506040518060200160405280600081525061168f565b9392505050565b8051825114610f195760405162461bcd60e51b815260040161054d906121e9565b815160005b818110156110a357610f94838281518110610f3557fe5b6020026020010151600080896001600160a01b03166001600160a01b031681526020019081526020016000206000878581518110610f6f57fe5b60200260200101518152602001908152602001600020546118b390919063ffffffff16565b600080886001600160a01b03166001600160a01b031681526020019081526020016000206000868481518110610fc657fe5b602002602001015181526020019081526020016000208190555061104e838281518110610fef57fe5b6020026020010151600080886001600160a01b03166001600160a01b03168152602001908152602001600020600087858151811061102957fe5b602002602001015181526020019081526020016000205461130890919063ffffffff16565b600080876001600160a01b03166001600160a01b03168152602001908152602001600020600086848151811061108057fe5b602090810291909101810151825281019190915260400160002055600101610f1e565b50836001600160a01b0316856001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb86866040516110f3929190612025565b60405180910390a45050505050565b611114846001600160a01b03166118db565b1561067c5760405163bc197c8160e01b81526000906001600160a01b0386169063bc197c81906111509033908a90899089908990600401611f6f565b602060405180830381600087803b15801561116a57600080fd5b505af115801561117e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111a29190611dd5565b90506001600160e01b0319811663bc197c8160e01b146111d45760405162461bcd60e51b815260040161054d90612584565b505050505050565b6111e76004826118e1565b6040516001600160a01b038216907fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669290600090a250565b3390565b61122d6005826118e1565b6040516001600160a01b038216907f0a8eb35e5ca14b3d6f28e4abf2f128dbab231a58b56e89beb5d636115001e16590600090a250565b6001600160a01b0384166000908152602081815260408083208684529091529020546112909083611308565b6001600160a01b03851660008181526020818152604080832088845290915280822093909355915190919033907fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62906112ec9088908890612647565b60405180910390a461130260008585858561153b565b50505050565b600082820183811015610ef15760405162461bcd60e51b815260040161054d90612168565b611338600582610d75565b6040516001600160a01b038216907f22380c05984257a1cb900161c713dd71d39e74820f1aea43bd3f1bdd2096129990600090a250565b8051611382906002906020840190611929565b5050565b611391600482610d75565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b60006001600160a01b0382166113f05760405162461bcd60e51b815260040161054d9061241d565b506001600160a01b03166000908152602091909152604090205460ff1690565b600754600090611421906001611308565b905090565b600780546001019055565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b6001600160a01b03841660009081526020818152604080832085845290915290205461148b90826118b3565b6001600160a01b03808616600090815260208181526040808320878452825280832094909455918616815280825282812085825290915220546114ce9082611308565b6001600160a01b03808516600081815260208181526040808320888452909152908190209390935591519086169033907fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629061152d9087908790612647565b60405180910390a450505050565b61154d846001600160a01b03166118db565b1561067c5760405163f23a6e6160e01b81526000906001600160a01b0386169063f23a6e61906115899033908a90899089908990600401611fcd565b602060405180830381600087803b1580156115a357600080fd5b505af11580156115b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115db9190611dd5565b90506001600160e01b0319811663f23a6e6160e01b146111d45760405162461bcd60e51b815260040161054d906125e1565b6001600160a01b0381166116335760405162461bcd60e51b815260040161054d90612122565b6003546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600380546001600160a01b0319166001600160a01b0392909216919091179055565b805182518451865188516060948a948a948a948a948a948a9491909201909201909101016001600160401b03811180156116c857600080fd5b506040519080825280601f01601f1916602001820160405280156116f3576020820181803683370190505b509050806000805b885181101561174c5788818151811061171057fe5b602001015160f81c60f81b83838060010194508151811061172d57fe5b60200101906001600160f81b031916908160001a9053506001016116fb565b5060005b87518110156117a15787818151811061176557fe5b602001015160f81c60f81b83838060010194508151811061178257fe5b60200101906001600160f81b031916908160001a905350600101611750565b5060005b86518110156117f6578681815181106117ba57fe5b602001015160f81c60f81b8383806001019450815181106117d757fe5b60200101906001600160f81b031916908160001a9053506001016117a5565b5060005b855181101561184b5785818151811061180f57fe5b602001015160f81c60f81b83838060010194508151811061182c57fe5b60200101906001600160f81b031916908160001a9053506001016117fa565b5060005b84518110156118a05784818151811061186457fe5b602001015160f81c60f81b83838060010194508151811061188157fe5b60200101906001600160f81b031916908160001a90535060010161184f565b50909d9c50505050505050505050505050565b6000828211156118d55760405162461bcd60e51b815260040161054d9061223e565b50900390565b3b151590565b6118eb82826113c8565b6119075760405162461bcd60e51b815260040161054d906122c5565b6001600160a01b0316600090815260209190915260409020805460ff19169055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061196a57805160ff1916838001178555611997565b82800160010185558215611997579182015b8281111561199757825182559160200191906001019061197c565b506119a39291506119a7565b5090565b5b808211156119a357600081556001016119a8565b600082601f8301126119cc578081fd5b81356119df6119da8261267b565b612655565b818152915060208083019084810181840286018201871015611a0057600080fd5b60005b84811015611a1f57813584529282019290820190600101611a03565b505050505092915050565b60008083601f840112611a3b578182fd5b5081356001600160401b03811115611a51578182fd5b602083019150836020828501011115611a6957600080fd5b9250929050565b600082601f830112611a80578081fd5b81356001600160401b03811115611a95578182fd5b611aa8601f8201601f1916602001612655565b9150808252836020828501011115611abf57600080fd5b8060208401602084013760009082016020015292915050565b600060208284031215611ae9578081fd5b8135610ef18161269a565b60008060408385031215611b06578081fd5b8235611b118161269a565b91506020830135611b218161269a565b809150509250929050565b600080600080600060a08688031215611b43578081fd5b8535611b4e8161269a565b94506020860135611b5e8161269a565b935060408601356001600160401b0380821115611b79578283fd5b611b8589838a016119bc565b94506060880135915080821115611b9a578283fd5b611ba689838a016119bc565b93506080880135915080821115611bbb578283fd5b50611bc888828901611a70565b9150509295509295909350565b600080600080600060a08688031215611bec578081fd5b8535611bf78161269a565b94506020860135611c078161269a565b9350604086013592506060860135915060808601356001600160401b03811115611c2f578182fd5b611bc888828901611a70565b60008060408385031215611c4d578182fd5b8235611c588161269a565b915060208301358015158114611b21578182fd5b60008060408385031215611c7e578182fd5b8235611c898161269a565b946020939093013593505050565b60008060008060808587031215611cac578384fd5b8435611cb78161269a565b9350602085013592506040850135915060608501356001600160401b03811115611cdf578182fd5b611ceb87828801611a70565b91505092959194509250565b60008060408385031215611d09578182fd5b82356001600160401b0380821115611d1f578384fd5b818501915085601f830112611d32578384fd5b8135611d406119da8261267b565b80828252602080830192508086018a828387028901011115611d60578889fd5b8896505b84871015611d8b578035611d778161269a565b845260019690960195928101928101611d64565b509096508701359350505080821115611da2578283fd5b50611daf858286016119bc565b9150509250929050565b600060208284031215611dca578081fd5b8135610ef1816126af565b600060208284031215611de6578081fd5b8151610ef1816126af565b600060208284031215611e02578081fd5b8151610ef18161269a565b600060208284031215611e1e578081fd5b81356001600160401b03811115611e33578182fd5b610cc984828501611a70565b600060208284031215611e50578081fd5b5035919050565b60008060008060008060808789031215611e6f578384fd5b863595506020870135945060408701356001600160401b0380821115611e93578586fd5b611e9f8a838b01611a2a565b90965094506060890135915080821115611eb7578283fd5b50611ec489828a01611a2a565b979a9699509497509295939492505050565b6000815180845260208085019450808401835b83811015611f0557815187529582019590820190600101611ee9565b509495945050505050565b60008151808452815b81811015611f3557602081850181015186830182015201611f19565b81811115611f465782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0386811682528516602082015260a060408201819052600090611f9b90830186611ed6565b8281036060840152611fad8186611ed6565b90508281036080840152611fc18185611f10565b98975050505050505050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a06080820181905260009061200790830184611f10565b979650505050505050565b600060208252610ef16020830184611ed6565b6000604082526120386040830185611ed6565b828103602084015261204a8185611ed6565b95945050505050565b901515815260200190565b60006020825282602083015282846040840137818301604090810191909152601f909201601f19160101919050565b600060208252610ef16020830184611f10565b6020808252602b908201527f4552433131353523736166655472616e7366657246726f6d3a20494e56414c4960408201526a1117d49150d2541251539560aa1b606082015260800190565b6020808252601f908201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b6020808252602a908201527f4552433131353523736166655472616e7366657246726f6d3a20494e56414c49604082015269222fa7a822a920aa27a960b11b606082015260800190565b60208082526035908201527f45524331313535235f7361666542617463685472616e7366657246726f6d3a206040820152740929cac82989288be82a4a482b2a6be988a9c8ea89605b1b606082015260800190565b6020808252601e908201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604082015260600190565b60208082526030908201527f4d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766560408201526f20746865204d696e74657220726f6c6560801b606082015260800190565b60208082526021908201527f526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c6040820152606560f81b606082015260800190565b60208082526030908201527f45524331313535237361666542617463685472616e7366657246726f6d3a204960408201526f13959053125117d49150d2541251539560821b606082015260800190565b60208082526025908201527f4552433732315472616461626c65237572693a204e4f4e4558495354454e545f6040820152642a27a5a2a760d91b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252602d908201527f496e697469616c20737570706c792063616e6e6f74206265206d6f726520746860408201526c616e206d617820737570706c7960981b606082015260800190565b60208082526022908201527f526f6c65733a206163636f756e7420697320746865207a65726f206164647265604082015261737360f01b606082015260800190565b602080825260409082018190527f57686974656c69737441646d696e526f6c653a2063616c6c657220646f657320908201527f6e6f742068617665207468652057686974656c69737441646d696e20726f6c65606082015260800190565b6020808252602c908201527f455243313135352362616c616e63654f6642617463683a20494e56414c49445f60408201526b082a4a482b2be988a9c8ea8960a31b606082015260800190565b6020808252602f908201527f45524331313535237361666542617463685472616e7366657246726f6d3a204960408201526e272b20a624a22fa7a822a920aa27a960891b606082015260800190565b60208082526012908201527113585e081cdd5c1c1b1e481c995858da195960721b604082015260600190565b6020808252603f908201527f45524331313535235f63616c6c6f6e455243313135354261746368526563656960408201527f7665643a20494e56414c49445f4f4e5f524543454956455f4d45535341474500606082015260800190565b6020808252603a908201527f45524331313535235f63616c6c6f6e4552433131353552656365697665643a2060408201527f494e56414c49445f4f4e5f524543454956455f4d455353414745000000000000606082015260800190565b90815260200190565b918252602082015260400190565b6040518181016001600160401b038111828210171561267357600080fd5b604052919050565b60006001600160401b03821115612690578081fd5b5060209081020190565b6001600160a01b03811681146106b057600080fd5b6001600160e01b0319811681146106b057600080fdfea2646970667358221220bfb4bdeb7ae9a210a82ea2047a7db67f12ae286ed491b243d7cb15043c74098a64736f6c634300060c0033";
