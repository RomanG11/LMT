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
  PayableOverrides,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface DistributionInterface extends ethers.utils.Interface {
  functions: {
    "distribute(address[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "distribute",
    values: [string[]]
  ): string;

  decodeFunctionResult(functionFragment: "distribute", data: BytesLike): Result;

  events: {};
}

export class Distribution extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: DistributionInterface;

  functions: {
    distribute(
      to: string[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "distribute(address[])"(
      to: string[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;
  };

  distribute(
    to: string[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "distribute(address[])"(
    to: string[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  callStatic: {
    distribute(to: string[], overrides?: CallOverrides): Promise<void>;

    "distribute(address[])"(
      to: string[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    distribute(to: string[], overrides?: PayableOverrides): Promise<BigNumber>;

    "distribute(address[])"(
      to: string[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    distribute(
      to: string[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "distribute(address[])"(
      to: string[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;
  };
}