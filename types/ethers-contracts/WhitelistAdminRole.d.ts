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

interface WhitelistAdminRoleInterface extends ethers.utils.Interface {
  functions: {
    "isWhitelistAdmin(address)": FunctionFragment;
    "addWhitelistAdmin(address)": FunctionFragment;
    "renounceWhitelistAdmin()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "isWhitelistAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addWhitelistAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceWhitelistAdmin",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "isWhitelistAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addWhitelistAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceWhitelistAdmin",
    data: BytesLike
  ): Result;

  events: {
    "WhitelistAdminAdded(address)": EventFragment;
    "WhitelistAdminRemoved(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "WhitelistAdminAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WhitelistAdminRemoved"): EventFragment;
}

export class WhitelistAdminRole extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: WhitelistAdminRoleInterface;

  functions: {
    isWhitelistAdmin(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isWhitelistAdmin(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    addWhitelistAdmin(
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addWhitelistAdmin(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    renounceWhitelistAdmin(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceWhitelistAdmin()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  isWhitelistAdmin(
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isWhitelistAdmin(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  addWhitelistAdmin(
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addWhitelistAdmin(address)"(
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  renounceWhitelistAdmin(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceWhitelistAdmin()"(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    isWhitelistAdmin(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isWhitelistAdmin(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    addWhitelistAdmin(
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "addWhitelistAdmin(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceWhitelistAdmin(overrides?: CallOverrides): Promise<void>;

    "renounceWhitelistAdmin()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    WhitelistAdminAdded(account: string | null): EventFilter;

    WhitelistAdminRemoved(account: string | null): EventFilter;
  };

  estimateGas: {
    isWhitelistAdmin(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isWhitelistAdmin(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addWhitelistAdmin(
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addWhitelistAdmin(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    renounceWhitelistAdmin(overrides?: Overrides): Promise<BigNumber>;

    "renounceWhitelistAdmin()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    isWhitelistAdmin(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isWhitelistAdmin(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addWhitelistAdmin(
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addWhitelistAdmin(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    renounceWhitelistAdmin(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "renounceWhitelistAdmin()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
