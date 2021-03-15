/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { TokenSale } from "./TokenSale";

export class TokenSaleFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _lymAddress: string,
    _lmtAddress: string,
    _startDate: BigNumberish,
    _wallet1Receiver: string,
    _wallet2Receiver: string,
    overrides?: Overrides
  ): Promise<TokenSale> {
    return super.deploy(
      _lymAddress,
      _lmtAddress,
      _startDate,
      _wallet1Receiver,
      _wallet2Receiver,
      overrides || {}
    ) as Promise<TokenSale>;
  }
  getDeployTransaction(
    _lymAddress: string,
    _lmtAddress: string,
    _startDate: BigNumberish,
    _wallet1Receiver: string,
    _wallet2Receiver: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _lymAddress,
      _lmtAddress,
      _startDate,
      _wallet1Receiver,
      _wallet2Receiver,
      overrides || {}
    );
  }
  attach(address: string): TokenSale {
    return super.attach(address) as TokenSale;
  }
  connect(signer: Signer): TokenSaleFactory {
    return super.connect(signer) as TokenSaleFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenSale {
    return new Contract(address, _abi, signerOrProvider) as TokenSale;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_lymAddress",
        type: "address"
      },
      {
        internalType: "address",
        name: "_lmtAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_startDate",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_wallet1Receiver",
        type: "address"
      },
      {
        internalType: "address",
        name: "_wallet2Receiver",
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
        name: "user",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "stage",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "lymAmount",
        type: "uint256"
      }
    ],
    name: "Bought",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lmtAmount",
        type: "uint256"
      }
    ],
    name: "Claimed",
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
    inputs: [],
    name: "EXCHANGE_RATIO",
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
    inputs: [],
    name: "LMT",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "LYM",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "SALE_DURATION",
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
        name: "",
        type: "address"
      }
    ],
    name: "balances",
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
        name: "",
        type: "address"
      }
    ],
    name: "claimed",
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
    inputs: [],
    name: "lmtTokensLocked",
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
    inputs: [],
    name: "lymCollected",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "startDate",
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
    inputs: [],
    name: "tokensSold",
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
    inputs: [],
    name: "wallet1Receiver",
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
    name: "wallet2Receiver",
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
        internalType: "uint256",
        name: "_lymAmount",
        type: "uint256"
      }
    ],
    name: "buy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userAddress",
        type: "address"
      }
    ],
    name: "tokensToClaim",
    outputs: [
      {
        internalType: "uint256",
        name: "res",
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
        name: "_userAddress",
        type: "address"
      }
    ],
    name: "getRemainingTokens",
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
    inputs: [],
    name: "getCurrentExchangeRate",
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
    inputs: [],
    name: "getDistributionStartTime",
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
    inputs: [],
    name: "getDistributionEndTime",
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
    inputs: [],
    name: "withdrawUnsoldTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address"
      }
    ],
    name: "withdrawLostTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x6080604052600860065534801561001557600080fd5b50604051611147380380611147833981810160405260a081101561003857600080fd5b508051602082015160408301516060840151608090940151929391929091906000610061610103565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600592909255600180546001600160a01b039586166001600160a01b0319918216179091556002805494861694821694909417909355600a8054918516918416919091179055600b8054919093169116179055610107565b3390565b611031806101166000396000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c8063715018a6116100c3578063c8bdbfb61161007c578063c8bdbfb6146102b3578063d96a094a146102bb578063ee4d88f0146102d8578063f2fde38b146102e0578063f4ec71d814610306578063fbd0da611461030e57610158565b8063715018a6146102475780638c7397f81461024f5780638da5cb5b14610257578063a3546be41461025f578063a6a745f914610285578063c884ef831461028d57610158565b80634eedbe97116101155780634eedbe97146101fb578063518ab2a81461021f57806357c5a8fe1461022757806361354f501461022f5780636a9ee6e8146102375780636d79207c1461023f57610158565b80630b97bc861461015d57806310375a67146101775780631e8683341461019d57806327e235e3146101c35780633ca967f3146101e95780634e71d92d146101f1575b600080fd5b610165610316565b60408051918252519081900360200190f35b6101656004803603602081101561018d57600080fd5b50356001600160a01b031661031c565b610165600480360360208110156101b357600080fd5b50356001600160a01b0316610351565b610165600480360360208110156101d957600080fd5b50356001600160a01b03166103f1565b610165610403565b6101f9610431565b005b610203610577565b604080516001600160a01b039092168252519081900360200190f35b610165610586565b61020361058c565b61016561059b565b6101656105af565b6101656105b5565b6101f96105bc565b610165610668565b61020361066e565b6101f96004803603602081101561027557600080fd5b50356001600160a01b031661067d565b6102036108ce565b610165600480360360208110156102a357600080fd5b50356001600160a01b03166108dd565b6101f96108ef565b6101f9600480360360208110156102d157600080fd5b5035610b42565b610165610d6a565b6101f9600480360360208110156102f657600080fd5b50356001600160a01b0316610d75565b610203610e77565b610165610e86565b60055481565b6001600160a01b038116600090815260086020908152604080832054600790925282205461034991610e8c565b90505b919050565b6001600160a01b0381166000908152600760205260408120548061037957600091505061034c565b6000610383610d6a565b9050805b61038f61059b565b8110156103c457428111156103a3576103c4565b6103b8600a6103b28686610ee9565b90610f4a565b935062093a8001610387565b506001600160a01b0384166000908152600860205260409020546103e9908490610e8c565b949350505050565b60076020526000908152604090205481565b60004260055410801561041c5750620151806005540142105b1561042a575060065461042e565b5060005b90565b600061043c33610351565b336000908152600860205260409020549091506104599082610ee9565b33600090815260086020526040902055806104ae576040805162461bcd60e51b815260206004820152601060248201526f6e6f7468696e6720746f20636c61696d60801b604482015290519081900360640190fd5b6002546040805163a9059cbb60e01b81523360048201526024810184905290516001600160a01b039092169163a9059cbb916044808201926020929091908290030181600087803b15801561050257600080fd5b505af1158015610516573d6000803e3d6000fd5b505050506040513d602081101561052c57600080fd5b505060095461053b9082610e8c565b60095560408051828152905133917fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a919081900360200190a250565b6002546001600160a01b031681565b60045481565b6001546001600160a01b031681565b60006105a5610d6a565b625c490001905090565b60095481565b6201518081565b6105c4610fb1565b6001600160a01b03166105d561066e565b6001600160a01b03161461061e576040805162461bcd60e51b81526020600482018190526024820152600080516020610fdc833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b60035481565b6000546001600160a01b031690565b610685610fb1565b6001600160a01b031661069661066e565b6001600160a01b0316146106df576040805162461bcd60e51b81526020600482018190526024820152600080516020610fdc833981519152604482015290519081900360640190fd5b6201518060055401421161072e576040805162461bcd60e51b81526020600482015260116024820152706e6f7420612066696e6973682074696d6560781b604482015290519081900360640190fd5b6002546001600160a01b0382811691161415610786576040805162461bcd60e51b815260206004820152601260248201527118d85b89dd081dda5d1a191c985dc813135560721b604482015290519081900360640190fd5b6001600160a01b0381166107c65760405133904780156108fc02916000818181858888f193505050501580156107c0573d6000803e3d6000fd5b506108cb565b806001600160a01b031663a9059cbb33836001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561082357600080fd5b505afa158015610837573d6000803e3d6000fd5b505050506040513d602081101561084d57600080fd5b5051604080516001600160e01b031960e086901b1681526001600160a01b03909316600484015260248301919091525160448083019260209291908290030181600087803b15801561089e57600080fd5b505af11580156108b2573d6000803e3d6000fd5b505050506040513d60208110156108c857600080fd5b50505b50565b600a546001600160a01b031681565b60086020526000908152604090205481565b6108f7610fb1565b6001600160a01b031661090861066e565b6001600160a01b031614610951576040805162461bcd60e51b81526020600482018190526024820152600080516020610fdc833981519152604482015290519081900360640190fd5b620151806005540142116109a0576040805162461bcd60e51b81526020600482015260116024820152706e6f7420612066696e6973682074696d6560781b604482015290519081900360640190fd5b600254604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b1580156109eb57600080fd5b505afa1580156109ff573d6000803e3d6000fd5b505050506040513d6020811015610a1557600080fd5b5051600954909150600090610a2b908390610e8c565b600254600a546040805163a9059cbb60e01b81526001600160a01b039283166004820152600385046024820152905193945091169163a9059cbb916044808201926020929091908290030181600087803b158015610a8857600080fd5b505af1158015610a9c573d6000803e3d6000fd5b505050506040513d6020811015610ab257600080fd5b505060028054600b546040805163a9059cbb60e01b81526001600160a01b03928316600482015260039486029490940460248501525191169163a9059cbb9160448083019260209291908290030181600087803b158015610b1257600080fd5b505af1158015610b26573d6000803e3d6000fd5b505050506040513d6020811015610b3c57600080fd5b50505050565b42600554108015610b595750620151806005540142105b610b9b576040805162461bcd60e51b815260206004820152600e60248201526d1cd85b19481a5cc818db1bdcd95960921b604482015290519081900360640190fd5b6001546001600160a01b03166323b872dd33610bb561066e565b846040518463ffffffff1660e01b815260040180846001600160a01b03168152602001836001600160a01b031681526020018281526020019350505050602060405180830381600087803b158015610c0c57600080fd5b505af1158015610c20573d6000803e3d6000fd5b505050506040513d6020811015610c3657600080fd5b5051610c4157600080fd5b600354610c4e9082610ee9565b600355600654600090610c69906002906103b2908590610f4a565b6002546040805163a9059cbb60e01b81523360048201526024810184905290519293506001600160a01b039091169163a9059cbb916044808201926020929091908290030181600087803b158015610cc057600080fd5b505af1158015610cd4573d6000803e3d6000fd5b505050506040513d6020811015610cea57600080fd5b505033600090815260076020526040902054610d069082610ee9565b33600090815260076020526040902055600954610d239082610ee9565b600955600454610d339082610ee9565b600455604051829060019033907fa9a40dec7a304e5915d11358b968c1e8d365992abf20f82285d1df1b30c8e24c90600090a45050565b600554620a8c000190565b610d7d610fb1565b6001600160a01b0316610d8e61066e565b6001600160a01b031614610dd7576040805162461bcd60e51b81526020600482018190526024820152600080516020610fdc833981519152604482015290519081900360640190fd5b6001600160a01b038116610e1c5760405162461bcd60e51b8152600401808060200182810382526026815260200180610fb66026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b600b546001600160a01b031681565b60065481565b600082821115610ee3576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b600082820183811015610f43576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6000808211610fa0576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b818381610fa957fe5b049392505050565b339056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a26469706673582212204ecd735cc7ea04aab8737be43b3990d4f230dc2f63fe37ac5bf7805321e496c264736f6c634300060c0033";