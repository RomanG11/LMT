/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface MultisendInterface extends ethers.utils.Interface {
  functions: {
    "multisend(address,address[],uint256[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "multisend",
    values: [string, string[], BigNumberish[]]
  ): string;

  decodeFunctionResult(functionFragment: "multisend", data: BytesLike): Result;

  events: {};
}

export class Multisend extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MultisendInterface;

  functions: {
    multisend(
      token: string,
      to: string[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "multisend(address,address[],uint256[])"(
      token: string,
      to: string[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  multisend(
    token: string,
    to: string[],
    amounts: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "multisend(address,address[],uint256[])"(
    token: string,
    to: string[],
    amounts: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    multisend(
      token: string,
      to: string[],
      amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "multisend(address,address[],uint256[])"(
      token: string,
      to: string[],
      amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    multisend(
      token: string,
      to: string[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "multisend(address,address[],uint256[])"(
      token: string,
      to: string[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    multisend(
      token: string,
      to: string[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "multisend(address,address[],uint256[])"(
      token: string,
      to: string[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
