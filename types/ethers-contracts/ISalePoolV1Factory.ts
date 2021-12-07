/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import { ISalePoolV1 } from "./ISalePoolV1";

export class ISalePoolV1Factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISalePoolV1 {
    return new Contract(address, _abi, signerOrProvider) as ISalePoolV1;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "earned",
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
