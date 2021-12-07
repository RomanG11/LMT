/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import { Inft } from "./Inft";

export class InftFactory {
  static connect(address: string, signerOrProvider: Signer | Provider): Inft {
    return new Contract(address, _abi, signerOrProvider) as Inft;
  }
}

const _abi = [
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
  }
];
