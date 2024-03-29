/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { Distribution } from "./Distribution";

export class DistributionFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Distribution> {
    return super.deploy(overrides || {}) as Promise<Distribution>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Distribution {
    return super.attach(address) as Distribution;
  }
  connect(signer: Signer): DistributionFactory {
    return super.connect(signer) as DistributionFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Distribution {
    return new Contract(address, _abi, signerOrProvider) as Distribution;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    stateMutability: "payable",
    type: "receive"
  },
  {
    inputs: [
      {
        internalType: "address payable[]",
        name: "to",
        type: "address[]"
      }
    ],
    name: "distribute",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b03191633179055610175806100326000396000f3fe6080604052600436106100225760003560e01c80636138889b1461002e57610029565b3661002957005b600080fd5b6100d16004803603602081101561004457600080fd5b81019060208101813564010000000081111561005f57600080fd5b82018360208201111561007157600080fd5b8035906020019184602083028401116401000000008311171561009357600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506100d3945050505050565b005b60005b815181101561013b578181815181106100eb57fe5b60200260200101516001600160a01b03166108fc66b1a2bc2ec500009081150290604051600060405180830381858888f19350505050158015610132573d6000803e3d6000fd5b506001016100d6565b505056fea2646970667358221220c59aa320e053c606988fc45dba407d01fb1e1c354964f1983ea6294d7cf7caa164736f6c634300060c0033";
