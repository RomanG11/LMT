/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { Lmt } from "./Lmt";

export class LmtFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Lmt> {
    return super.deploy(overrides || {}) as Promise<Lmt>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Lmt {
    return super.attach(address) as Lmt;
  }
  connect(signer: Signer): LmtFactory {
    return super.connect(signer) as LmtFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Lmt {
    return new Contract(address, _abi, signerOrProvider) as Lmt;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
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
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
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
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
      }
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "distributionContract",
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
    name: "firstUnlockDate",
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
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
      }
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
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
    name: "locked",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "pools",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "saleFinishDate",
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
    name: "secondUnlockDate",
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
    inputs: [],
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
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
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
        name: "_distributionContract",
        type: "address"
      }
    ],
    name: "setDistributionContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_pools",
        type: "address[]"
      }
    ],
    name: "addPools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_pools",
        type: "address[]"
      }
    ],
    name: "removePools",
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
      },
      {
        internalType: "uint256",
        name: "_locked",
        type: "uint256"
      }
    ],
    name: "addLocked",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_saleFinishDate",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_firstUnlockDate",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_secondUnlockDate",
        type: "uint256"
      }
    ],
    name: "setUnlockDates",
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
    name: "getLocked",
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
        name: "account",
        type: "address"
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
  }
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405180604001604052806012815260200171263cb6b8379026b0b935b2ba102a37b5b2b760711b8152506040518060400160405280600381526020016213135560ea1b815250816003908051906020019062000071929190620004a6565b50805162000087906004906020840190620004a6565b50506005805460ff19166012179055506000620000a36200012b565b60058054610100600160a81b0319166101006001600160a01b03841690810291909117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35062000125735d32b87a43a2bd1f7df209d2f475b165d2c09e246b0409f9cbc7c4a04c220000006200012f565b62000542565b3390565b6001600160a01b0382166200018b576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b62000199600083836200023e565b620001b581600254620002f360201b62000f9e1790919060201c565b6002556001600160a01b03821660009081526020818152604090912054620001e891839062000f9e620002f3821b17901c565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b0383166200025357620002ee565b6001600160a01b0382166000908152600b602052604081205460ff161562000293576200028b846200035560201b62000fff1760201c565b9050620002a1565b6200029e8462000374565b90505b80821115620002ec576040805162461bcd60e51b81526020600482015260126024820152716e6f7420656e6f7567682062616c616e636560701b604482015290519081900360640190fd5b505b505050565b6000828201838110156200034e576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6001600160a01b0381166000908152602081905260409020545b919050565b6000620003af6200038583620003b5565b6200039b846200035560201b62000fff1760201c565b6200044860201b6200101a1790919060201c565b92915050565b6000600854421115620003cb575060006200036f565b600754421115620003fc576001600160a01b0382166000908152600a60205260409020546003905b0490506200036f565b6006544211156200042c576001600160a01b0382166000908152600a6020526040902054600390600202620003f3565b506001600160a01b03166000908152600a602052604090205490565b600082821115620004a0576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620004e957805160ff191683800117855562000519565b8280016001018555821562000519579182015b8281111562000519578251825591602001919060010190620004fc565b50620005279291506200052b565b5090565b5b808211156200052757600081556001016200052c565b61157780620005526000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c80638da5cb5b116100de578063bc22fd1b11610097578063dd62ed3e11610071578063dd62ed3e1461059f578063e73886b0146105cd578063e7a764ef146105f9578063f2fde38b1461061f5761018e565b8063bc22fd1b1461052a578063cbf9fe5f14610550578063d92dda6e146105765761018e565b80638da5cb5b146103f957806395d89b4114610401578063a4063dbc14610409578063a457c2d71461042f578063a9059cbb1461045b578063b36a4ab1146104875761018e565b8063395093511161014b5780636266e103116101255780636266e103146103bb57806370a08231146103c3578063715018a6146103e95780637614d9b9146103f15761018e565b806339509351146102c65780634b164140146102f25780635a4528c2146103975761018e565b80630317eee61461019357806306fdde03146101ad578063095ea7b31461022a57806318160ddd1461026a57806323b872dd14610272578063313ce567146102a8575b600080fd5b61019b610645565b60408051918252519081900360200190f35b6101b561064b565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101ef5781810151838201526020016101d7565b50505050905090810190601f16801561021c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102566004803603604081101561024057600080fd5b506001600160a01b0381351690602001356106e1565b604080519115158252519081900360200190f35b61019b6106fe565b6102566004803603606081101561028857600080fd5b506001600160a01b03813581169160208101359091169060400135610704565b6102b061078b565b6040805160ff9092168252519081900360200190f35b610256600480360360408110156102dc57600080fd5b506001600160a01b038135169060200135610794565b6103956004803603602081101561030857600080fd5b81019060208101813564010000000081111561032357600080fd5b82018360208201111561033557600080fd5b8035906020019184602083028401116401000000008311171561035757600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506107e2945050505050565b005b61039f6108a0565b604080516001600160a01b039092168252519081900360200190f35b61019b6108af565b61019b600480360360208110156103d957600080fd5b50356001600160a01b03166108b5565b6103956108da565b61019b61098c565b61039f610992565b6101b56109a6565b6102566004803603602081101561041f57600080fd5b50356001600160a01b0316610a07565b6102566004803603604081101561044557600080fd5b506001600160a01b038135169060200135610a1c565b6102566004803603604081101561047157600080fd5b506001600160a01b038135169060200135610a84565b6103956004803603602081101561049d57600080fd5b8101906020810181356401000000008111156104b857600080fd5b8201836020820111156104ca57600080fd5b803590602001918460208302840111640100000000831117156104ec57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610a98945050505050565b61019b6004803603602081101561054057600080fd5b50356001600160a01b0316610b52565b61019b6004803603602081101561056657600080fd5b50356001600160a01b0316610bdf565b6103956004803603606081101561058c57600080fd5b5080359060208101359060400135610bf1565b61019b600480360360408110156105b557600080fd5b506001600160a01b0381358116916020013516610cf3565b610395600480360360408110156105e357600080fd5b506001600160a01b038135169060200135610d1e565b6103956004803603602081101561060f57600080fd5b50356001600160a01b0316610dc0565b6103956004803603602081101561063557600080fd5b50356001600160a01b0316610e90565b60065481565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106d75780601f106106ac576101008083540402835291602001916106d7565b820191906000526020600020905b8154815290600101906020018083116106ba57829003601f168201915b5050505050905090565b60006106f56106ee611077565b848461107b565b50600192915050565b60025490565b6000610711848484611167565b6107818461071d611077565b61077c8560405180606001604052806028815260200161148c602891396001600160a01b038a1660009081526001602052604081209061075b611077565b6001600160a01b0316815260208101919091526040016000205491906112c2565b61107b565b5060019392505050565b60055460ff1690565b60006106f56107a1611077565b8461077c85600160006107b2611077565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490610f9e565b6107ea611077565b6001600160a01b03166107fb610992565b6001600160a01b031614610844576040805162461bcd60e51b815260206004820181905260248201526000805160206114b4833981519152604482015290519081900360640190fd5b60005b815181101561089c576000600b600084848151811061086257fe5b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff1916911515919091179055600101610847565b5050565b6009546001600160a01b031681565b60075481565b60006108d26108c383610b52565b6108cc84610fff565b9061101a565b90505b919050565b6108e2611077565b6001600160a01b03166108f3610992565b6001600160a01b03161461093c576040805162461bcd60e51b815260206004820181905260248201526000805160206114b4833981519152604482015290519081900360640190fd5b60055460405160009161010090046001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a360058054610100600160a81b0319169055565b60085481565b60055461010090046001600160a01b031690565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106d75780601f106106ac576101008083540402835291602001916106d7565b600b6020526000908152604090205460ff1681565b60006106f5610a29611077565b8461077c8560405180606001604052806025815260200161151d6025913960016000610a53611077565b6001600160a01b03908116825260208083019390935260409182016000908120918d168152925290205491906112c2565b60006106f5610a91611077565b8484611167565b610aa0611077565b6001600160a01b0316610ab1610992565b6001600160a01b031614610afa576040805162461bcd60e51b815260206004820181905260248201526000805160206114b4833981519152604482015290519081900360640190fd5b60005b815181101561089c576001600b6000848481518110610b1857fe5b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff1916911515919091179055600101610afd565b6000600854421115610b66575060006108d5565b600754421115610b95576001600160a01b0382166000908152600a60205260409020546003905b0490506108d5565b600654421115610bc3576001600160a01b0382166000908152600a6020526040902054600390600202610b8d565b506001600160a01b03166000908152600a602052604090205490565b600a6020526000908152604090205481565b610bf9611077565b6001600160a01b0316610c0a610992565b6001600160a01b031614610c53576040805162461bcd60e51b815260206004820181905260248201526000805160206114b4833981519152604482015290519081900360640190fd5b60075415610c96576040805162461bcd60e51b815260206004820152600b60248201526a185b1c9958591e481cd95d60aa1b604482015290519081900360640190fd5b8183108015610ca457508082105b610ce5576040805162461bcd60e51b815260206004820152600d60248201526c1a5b9d985b1a59081a5b9c1d5d609a1b604482015290519081900360640190fd5b600692909255600755600855565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6009546001600160a01b03163314610d7d576040805162461bcd60e51b815260206004820152601a60248201527f6f6e6c7920646973747269627574696f6e20636f6e7472616374000000000000604482015290519081900360640190fd5b6001600160a01b0382166000908152600a6020526040902054610da09082610f9e565b6001600160a01b039092166000908152600a602052604090209190915550565b610dc8611077565b6001600160a01b0316610dd9610992565b6001600160a01b031614610e22576040805162461bcd60e51b815260206004820181905260248201526000805160206114b4833981519152604482015290519081900360640190fd5b6009546001600160a01b031615610e6e576040805162461bcd60e51b815260206004820152600b60248201526a185b1c9958591e481cd95d60aa1b604482015290519081900360640190fd5b600980546001600160a01b0319166001600160a01b0392909216919091179055565b610e98611077565b6001600160a01b0316610ea9610992565b6001600160a01b031614610ef2576040805162461bcd60e51b815260206004820181905260248201526000805160206114b4833981519152604482015290519081900360640190fd5b6001600160a01b038116610f375760405162461bcd60e51b815260040180806020018281038252602681526020018061141e6026913960400191505060405180910390fd5b6005546040516001600160a01b0380841692610100900416907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600580546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b600082820183811015610ff8576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6001600160a01b031660009081526020819052604090205490565b600082821115611071576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b3390565b6001600160a01b0383166110c05760405162461bcd60e51b81526004018080602001828103825260248152602001806114f96024913960400191505060405180910390fd5b6001600160a01b0382166111055760405162461bcd60e51b81526004018080602001828103825260228152602001806114446022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166111ac5760405162461bcd60e51b81526004018080602001828103825260258152602001806114d46025913960400191505060405180910390fd5b6001600160a01b0382166111f15760405162461bcd60e51b81526004018080602001828103825260238152602001806113fb6023913960400191505060405180910390fd5b6111fc838383611359565b61123981604051806060016040528060268152602001611466602691396001600160a01b03861660009081526020819052604090205491906112c2565b6001600160a01b0380851660009081526020819052604080822093909355908416815220546112689082610f9e565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156113515760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156113165781810151838201526020016112fe565b50505050905090810190601f1680156113435780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6001600160a01b03831661136c576113f5565b6001600160a01b0382166000908152600b602052604081205460ff161561139d5761139684610fff565b90506113a9565b6113a6846108b5565b90505b808211156113f3576040805162461bcd60e51b81526020600482015260126024820152716e6f7420656e6f7567682062616c616e636560701b604482015290519081900360640190fd5b505b50505056fe45524332303a207472616e7366657220746f20746865207a65726f20616464726573734f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63654f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657245524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212201140a2cdbfd9d3fdb58ce9e24deda46a11dbd93e06754b71f89fd90bfe65a86864736f6c634300060c0033";
