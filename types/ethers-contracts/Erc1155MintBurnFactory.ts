/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { Erc1155MintBurn } from "./Erc1155MintBurn";

export class Erc1155MintBurnFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Erc1155MintBurn> {
    return super.deploy(overrides || {}) as Promise<Erc1155MintBurn>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Erc1155MintBurn {
    return super.attach(address) as Erc1155MintBurn;
  }
  connect(signer: Signer): Erc1155MintBurnFactory {
    return super.connect(signer) as Erc1155MintBurnFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Erc1155MintBurn {
    return new Contract(address, _abi, signerOrProvider) as Erc1155MintBurn;
  }
}

const _abi = [
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
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506111eb806100206000396000f3fe608060405234801561001057600080fd5b506004361061007c5760003560e01c80634e1273f41161005b5780634e1273f4146100df578063a22cb465146100ff578063e985e9c514610112578063f242432a146101255761007c565b8062fdd58e1461008157806301ffc9a7146100aa5780632eb2c2d6146100ca575b600080fd5b61009461008f366004610b94565b610138565b6040516100a19190611129565b60405180910390f35b6100bd6100b8366004610c80565b610161565b6040516100a19190610e21565b6100dd6100d8366004610a4a565b6101a8565b005b6100f26100ed366004610bbe565b61022f565b6040516100a19190610de0565b6100dd61010d366004610b59565b610328565b6100bd610120366004610a16565b610397565b6100dd610133366004610af4565b6103c5565b6001600160a01b0382166000908152602081815260408083208484529091529020545b92915050565b60006001600160e01b031982166301ffc9a760e01b148061019257506001600160e01b03198216636cdb3d1360e11b145b1561019f575060016101a3565b5060005b919050565b336001600160a01b03861614806101c457506101c48533610397565b6101e95760405162461bcd60e51b81526004016101e090611020565b60405180910390fd5b6001600160a01b03841661020f5760405162461bcd60e51b81526004016101e090610f84565b61021b8585858561043c565b6102288585858585610646565b5050505050565b606081518351146102525760405162461bcd60e51b81526004016101e090610fd4565b6060835167ffffffffffffffff8111801561026c57600080fd5b50604051908082528060200260200182016040528015610296578160200160208202803683370190505b50905060005b8451811015610320576000808683815181106102b457fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008583815181106102ea57fe5b602002602001015181526020019081526020016000205482828151811061030d57fe5b602090810291909101015260010161029c565b509392505050565b3360008181526001602090815260408083206001600160a01b038716808552925291829020805460ff191685151517905590519091907f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319061038b908590610e21565b60405180910390a35050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b336001600160a01b03861614806103e157506103e18533610397565b6103fd5760405162461bcd60e51b81526004016101e090610eae565b6001600160a01b0384166104235760405162461bcd60e51b81526004016101e090610e2c565b61042f85858585610720565b61022885858585856107fc565b805182511461045d5760405162461bcd60e51b81526004016101e090610ef8565b815160005b818110156105e7576104d883828151811061047957fe5b6020026020010151600080896001600160a01b03166001600160a01b0316815260200190815260200160002060008785815181106104b357fe5b60200260200101518152602001908152602001600020546108ce90919063ffffffff16565b600080886001600160a01b03166001600160a01b03168152602001908152602001600020600086848151811061050a57fe5b602002602001015181526020019081526020016000208190555061059283828151811061053357fe5b6020026020010151600080886001600160a01b03166001600160a01b03168152602001908152602001600020600087858151811061056d57fe5b60200260200101518152602001908152602001600020546108f690919063ffffffff16565b600080876001600160a01b03166001600160a01b0316815260200190815260200160002060008684815181106105c457fe5b602090810291909101810151825281019190915260400160002055600101610462565b50836001600160a01b0316856001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051610637929190610df3565b60405180910390a45050505050565b610658846001600160a01b0316610922565b156102285760405163bc197c8160e01b81526000906001600160a01b0386169063bc197c81906106949033908a90899089908990600401610d3d565b602060405180830381600087803b1580156106ae57600080fd5b505af11580156106c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e69190610c9c565b90506001600160e01b0319811663bc197c8160e01b146107185760405162461bcd60e51b81526004016101e09061106f565b505050505050565b6001600160a01b03841660009081526020818152604080832085845290915290205461074c90826108ce565b6001600160a01b038086166000908152602081815260408083208784528252808320949094559186168152808252828120858252909152205461078f90826108f6565b6001600160a01b03808516600081815260208181526040808320888452909152908190209390935591519086169033907fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62906107ee9087908790611132565b60405180910390a450505050565b61080e846001600160a01b0316610922565b156102285760405163f23a6e6160e01b81526000906001600160a01b0386169063f23a6e619061084a9033908a90899089908990600401610d9b565b602060405180830381600087803b15801561086457600080fd5b505af1158015610878573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061089c9190610c9c565b90506001600160e01b0319811663f23a6e6160e01b146107185760405162461bcd60e51b81526004016101e0906110cc565b6000828211156108f05760405162461bcd60e51b81526004016101e090610f4d565b50900390565b60008282018381101561091b5760405162461bcd60e51b81526004016101e090610e77565b9392505050565b3b151590565b80356001600160a01b038116811461015b57600080fd5b600082601f83011261094f578081fd5b813561096261095d82611167565b611140565b81815291506020808301908481018184028601820187101561098357600080fd5b60005b848110156109a257813584529282019290820190600101610986565b505050505092915050565b600082601f8301126109bd578081fd5b813567ffffffffffffffff8111156109d3578182fd5b6109e6601f8201601f1916602001611140565b91508082528360208285010111156109fd57600080fd5b8060208401602084013760009082016020015292915050565b60008060408385031215610a28578182fd5b610a328484610928565b9150610a418460208501610928565b90509250929050565b600080600080600060a08688031215610a61578081fd5b8535610a6c81611187565b94506020860135610a7c81611187565b9350604086013567ffffffffffffffff80821115610a98578283fd5b610aa489838a0161093f565b94506060880135915080821115610ab9578283fd5b610ac589838a0161093f565b93506080880135915080821115610ada578283fd5b50610ae7888289016109ad565b9150509295509295909350565b600080600080600060a08688031215610b0b578081fd5b610b158787610928565b9450610b248760208801610928565b93506040860135925060608601359150608086013567ffffffffffffffff811115610b4d578182fd5b610ae7888289016109ad565b60008060408385031215610b6b578182fd5b610b758484610928565b915060208301358015158114610b89578182fd5b809150509250929050565b60008060408385031215610ba6578182fd5b610bb08484610928565b946020939093013593505050565b60008060408385031215610bd0578182fd5b823567ffffffffffffffff80821115610be7578384fd5b818501915085601f830112610bfa578384fd5b8135610c0861095d82611167565b80828252602080830192508086018a828387028901011115610c28578889fd5b8896505b84871015610c5257610c3e8b82610928565b845260019690960195928101928101610c2c565b509096508701359350505080821115610c69578283fd5b50610c768582860161093f565b9150509250929050565b600060208284031215610c91578081fd5b813561091b8161119f565b600060208284031215610cad578081fd5b815161091b8161119f565b6000815180845260208085019450808401835b83811015610ce757815187529582019590820190600101610ccb565b509495945050505050565b60008151808452815b81811015610d1757602081850181015186830182015201610cfb565b81811115610d285782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0386811682528516602082015260a060408201819052600090610d6990830186610cb8565b8281036060840152610d7b8186610cb8565b90508281036080840152610d8f8185610cf2565b98975050505050505050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a060808201819052600090610dd590830184610cf2565b979650505050505050565b60006020825261091b6020830184610cb8565b600060408252610e066040830185610cb8565b8281036020840152610e188185610cb8565b95945050505050565b901515815260200190565b6020808252602b908201527f4552433131353523736166655472616e7366657246726f6d3a20494e56414c4960408201526a1117d49150d2541251539560aa1b606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b6020808252602a908201527f4552433131353523736166655472616e7366657246726f6d3a20494e56414c49604082015269222fa7a822a920aa27a960b11b606082015260800190565b60208082526035908201527f45524331313535235f7361666542617463685472616e7366657246726f6d3a206040820152740929cac82989288be82a4a482b2a6be988a9c8ea89605b1b606082015260800190565b6020808252601e908201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604082015260600190565b60208082526030908201527f45524331313535237361666542617463685472616e7366657246726f6d3a204960408201526f13959053125117d49150d2541251539560821b606082015260800190565b6020808252602c908201527f455243313135352362616c616e63654f6642617463683a20494e56414c49445f60408201526b082a4a482b2be988a9c8ea8960a31b606082015260800190565b6020808252602f908201527f45524331313535237361666542617463685472616e7366657246726f6d3a204960408201526e272b20a624a22fa7a822a920aa27a960891b606082015260800190565b6020808252603f908201527f45524331313535235f63616c6c6f6e455243313135354261746368526563656960408201527f7665643a20494e56414c49445f4f4e5f524543454956455f4d45535341474500606082015260800190565b6020808252603a908201527f45524331313535235f63616c6c6f6e4552433131353552656365697665643a2060408201527f494e56414c49445f4f4e5f524543454956455f4d455353414745000000000000606082015260800190565b90815260200190565b918252602082015260400190565b60405181810167ffffffffffffffff8111828210171561115f57600080fd5b604052919050565b600067ffffffffffffffff82111561117d578081fd5b5060209081020190565b6001600160a01b038116811461119c57600080fd5b50565b6001600160e01b03198116811461119c57600080fdfea264697066735822122016c55f45f2a169b0cfd5e60134e3f33a616b4fe053accdb7924364423d323de564736f6c634300060c0033";
