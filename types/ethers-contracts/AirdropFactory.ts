/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { Airdrop } from "./Airdrop";

export class AirdropFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Airdrop> {
    return super.deploy(overrides || {}) as Promise<Airdrop>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Airdrop {
    return super.attach(address) as Airdrop;
  }
  connect(signer: Signer): AirdropFactory {
    return super.connect(signer) as AirdropFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Airdrop {
    return new Contract(address, _abi, signerOrProvider) as Airdrop;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
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
        name: "_nftAddress",
        type: "address"
      },
      {
        internalType: "address[]",
        name: "_to",
        type: "address[]"
      },
      {
        internalType: "uint256[]",
        name: "_id",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "_quantity",
        type: "uint256[]"
      }
    ],
    name: "airdrop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163317905561030c806100326000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80638da5cb5b1461003b578063d1c4d0561461005f575b600080fd5b610043610185565b604080516001600160a01b039092168252519081900360200190f35b6101836004803603608081101561007557600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156100a057600080fd5b8201836020820111156100b257600080fd5b803590602001918460208302840111640100000000831117156100d457600080fd5b9193909290916020810190356401000000008111156100f257600080fd5b82018360208201111561010457600080fd5b8035906020019184602083028401116401000000008311171561012657600080fd5b91939092909160208101903564010000000081111561014457600080fd5b82018360208201111561015657600080fd5b8035906020019184602083028401116401000000008311171561017857600080fd5b509092509050610194565b005b6000546001600160a01b031681565b6000546001600160a01b031633146101df576040805162461bcd60e51b815260206004820152600960248201526837b7363ca7bbb732b960b91b604482015290519081900360640190fd5b8660005b868110156102cb57816001600160a01b031663731133e989898481811061020657fe5b905060200201356001600160a01b031688888581811061022257fe5b9050602002013587878681811061023557fe5b905060200201356040518463ffffffff1660e01b815260040180846001600160a01b03168152602001838152602001828152602001806020018281038252600281526020018061060f60f31b815250602001945050505050600060405180830381600087803b1580156102a757600080fd5b505af11580156102bb573d6000803e3d6000fd5b5050600190920191506101e39050565b50505050505050505056fea264697066735822122072a95e37ffae05355b80c9617b689ae0974e3a1fe2e42fa6f6311a152db191b164736f6c634300060c0033";
