/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { ProxyBasic } from "./ProxyBasic";

export class ProxyBasicFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ProxyBasic> {
    return super.deploy(overrides || {}) as Promise<ProxyBasic>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ProxyBasic {
    return super.attach(address) as ProxyBasic;
  }
  connect(signer: Signer): ProxyBasicFactory {
    return super.connect(signer) as ProxyBasicFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProxyBasic {
    return new Contract(address, _abi, signerOrProvider) as ProxyBasic;
  }
}

const _abi = [
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
    name: "impl",
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
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600061001b61006a565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006e565b3390565b6103208061007d6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063715018a61461005c5780638abf6077146100665780638da5cb5b146100845780638f32d59b1461008c578063f2fde38b146100a1575b600080fd5b6100646100b4565b005b61006e61012b565b60405161007b9190610250565b60405180910390f35b61006e61013a565b610094610149565b60405161007b9190610264565b6100646100af366004610222565b61016d565b6100bc610149565b6100e15760405162461bcd60e51b81526004016100d8906102b5565b60405180910390fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6001546001600160a01b031681565b6000546001600160a01b031690565b600080546001600160a01b031661015e61019d565b6001600160a01b031614905090565b610175610149565b6101915760405162461bcd60e51b81526004016100d8906102b5565b61019a816101a1565b50565b3390565b6001600160a01b0381166101c75760405162461bcd60e51b81526004016100d89061026f565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b600060208284031215610233578081fd5b81356001600160a01b0381168114610249578182fd5b9392505050565b6001600160a01b0391909116815260200190565b901515815260200190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260408201526060019056fea2646970667358221220b4f28a1991f4c9f5e93f893a124ac487da39be4066d92339896580fe983ba0b964736f6c634300060c0033";