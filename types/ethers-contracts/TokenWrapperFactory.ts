/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { TokenWrapper } from "./TokenWrapper";

export class TokenWrapperFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_tokenAddress: string, overrides?: Overrides): Promise<TokenWrapper> {
    return super.deploy(_tokenAddress, overrides || {}) as Promise<
      TokenWrapper
    >;
  }
  getDeployTransaction(
    _tokenAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_tokenAddress, overrides || {});
  }
  attach(address: string): TokenWrapper {
    return super.attach(address) as TokenWrapper;
  }
  connect(signer: Signer): TokenWrapperFactory {
    return super.connect(signer) as TokenWrapperFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenWrapper {
    return new Contract(address, _abi, signerOrProvider) as TokenWrapper;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_tokenAddress",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "token",
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
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516104193803806104198339818101604052602081101561003357600080fd5b5051600080546001600160a01b039092166001600160a01b03199092169190911790556103b4806100656000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806318160ddd1461005c5780632e1a7d4d1461007657806370a0823114610095578063a694fc3a146100bb578063fc0c546a146100d8575b600080fd5b6100646100fc565b60408051918252519081900360200190f35b6100936004803603602081101561008c57600080fd5b5035610102565b005b610064600480360360208110156100ab57600080fd5b50356001600160a01b03166101bf565b610093600480360360208110156100d157600080fd5b50356101da565b6100e06102b8565b604080516001600160a01b039092168252519081900360200190f35b60015490565b60015461010f90826102c7565b6001553360009081526002602052604090205461012c90826102c7565b336000818152600260209081526040808320949094558154845163a9059cbb60e01b815260048101949094526024840186905293516001600160a01b039094169363a9059cbb93604480820194918390030190829087803b15801561019057600080fd5b505af11580156101a4573d6000803e3d6000fd5b505050506040513d60208110156101ba57600080fd5b505050565b6001600160a01b031660009081526002602052604090205490565b60008111610224576040805162461bcd60e51b81526020600482015260126024820152710616d6f756e742063616e6e6f7420626520360741b604482015290519081900360640190fd5b6001546102319082610324565b6001553360009081526002602052604090205461024e9082610324565b33600081815260026020908152604080832094909455815484516323b872dd60e01b815260048101949094523060248501526044840186905293516001600160a01b03909416936323b872dd93606480820194918390030190829087803b15801561019057600080fd5b6000546001600160a01b031681565b60008282111561031e576040805162461bcd60e51b815260206004820152601760248201527f536166654d617468237375623a20554e444552464c4f57000000000000000000604482015290519081900360640190fd5b50900390565b600082820183811015610377576040805162461bcd60e51b8152602060048201526016602482015275536166654d617468236164643a204f564552464c4f5760501b604482015290519081900360640190fd5b939250505056fea2646970667358221220c3385c1157a9985a6ec1de1af3480a16323dbb03ae9cf02e36a02c9ec84ffa1b64736f6c634300060c0033";
