/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import { Ierc721 } from "./Ierc721";

export class Ierc721Factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Ierc721 {
    return new Contract(address, _abi, signerOrProvider) as Ierc721;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
