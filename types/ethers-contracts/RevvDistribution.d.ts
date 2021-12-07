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

interface RevvDistributionInterface extends ethers.utils.Interface {
  functions: {
    "baseIndex(uint256)": FunctionFragment;
    "currentIndex(uint256)": FunctionFragment;
    "from()": FunctionFragment;
    "nft()": FunctionFragment;
    "operators(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "setFrom(address)": FunctionFragment;
    "setCurrentIndex(uint256,uint256)": FunctionFragment;
    "changeOperator(address,bool)": FunctionFragment;
    "distribute(address[],uint256[])": FunctionFragment;
    "totalSupply(uint256)": FunctionFragment;
    "maxSupply(uint256)": FunctionFragment;
    "mint(address,uint256,uint256,bytes)": FunctionFragment;
    "airdrop(address,address[],uint256[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "baseIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "currentIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "from", values?: undefined): string;
  encodeFunctionData(functionFragment: "nft", values?: undefined): string;
  encodeFunctionData(functionFragment: "operators", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "setFrom", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setCurrentIndex",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeOperator",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "distribute",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "maxSupply",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "airdrop",
    values: [string, string[], BigNumberish[]]
  ): string;

  decodeFunctionResult(functionFragment: "baseIndex", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "from", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nft", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "operators", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setFrom", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setCurrentIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "distribute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maxSupply", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "airdrop", data: BytesLike): Result;

  events: {
    "OperatorsChanged(address,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OperatorsChanged"): EventFragment;
}

export class RevvDistribution extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: RevvDistributionInterface;

  functions: {
    baseIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "baseIndex(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    currentIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "currentIndex(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    from(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "from()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    nft(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "nft()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    operators(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "operators(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    owner(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "owner()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    setFrom(_from: string, overrides?: Overrides): Promise<ContractTransaction>;

    "setFrom(address)"(
      _from: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setCurrentIndex(
      _index: BigNumberish,
      _id: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setCurrentIndex(uint256,uint256)"(
      _index: BigNumberish,
      _id: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    changeOperator(
      _address: string,
      _status: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "changeOperator(address,bool)"(
      _address: string,
      _status: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    distribute(
      _to: string[],
      _indexes: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "distribute(address[],uint256[])"(
      _to: string[],
      _indexes: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    totalSupply(
      cardId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "totalSupply(uint256)"(
      cardId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    maxSupply(
      cardId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "maxSupply(uint256)"(
      cardId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    mint(
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "mint(address,uint256,uint256,bytes)"(
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    airdrop(
      _from: string,
      _to: string[],
      _ids: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "airdrop(address,address[],uint256[])"(
      _from: string,
      _to: string[],
      _ids: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  baseIndex(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  "baseIndex(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  currentIndex(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "currentIndex(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  from(overrides?: CallOverrides): Promise<string>;

  "from()"(overrides?: CallOverrides): Promise<string>;

  nft(overrides?: CallOverrides): Promise<string>;

  "nft()"(overrides?: CallOverrides): Promise<string>;

  operators(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "operators(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  setFrom(_from: string, overrides?: Overrides): Promise<ContractTransaction>;

  "setFrom(address)"(
    _from: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setCurrentIndex(
    _index: BigNumberish,
    _id: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setCurrentIndex(uint256,uint256)"(
    _index: BigNumberish,
    _id: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  changeOperator(
    _address: string,
    _status: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "changeOperator(address,bool)"(
    _address: string,
    _status: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  distribute(
    _to: string[],
    _indexes: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "distribute(address[],uint256[])"(
    _to: string[],
    _indexes: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  totalSupply(
    cardId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "totalSupply(uint256)"(
    cardId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  maxSupply(
    cardId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "maxSupply(uint256)"(
    cardId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  mint(
    _to: string,
    _id: BigNumberish,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "mint(address,uint256,uint256,bytes)"(
    _to: string,
    _id: BigNumberish,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  airdrop(
    _from: string,
    _to: string[],
    _ids: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "airdrop(address,address[],uint256[])"(
    _from: string,
    _to: string[],
    _ids: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    baseIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "baseIndex(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "currentIndex(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    from(overrides?: CallOverrides): Promise<string>;

    "from()"(overrides?: CallOverrides): Promise<string>;

    nft(overrides?: CallOverrides): Promise<string>;

    "nft()"(overrides?: CallOverrides): Promise<string>;

    operators(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "operators(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    setFrom(_from: string, overrides?: CallOverrides): Promise<void>;

    "setFrom(address)"(_from: string, overrides?: CallOverrides): Promise<void>;

    setCurrentIndex(
      _index: BigNumberish,
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setCurrentIndex(uint256,uint256)"(
      _index: BigNumberish,
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    changeOperator(
      _address: string,
      _status: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "changeOperator(address,bool)"(
      _address: string,
      _status: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    distribute(
      _to: string[],
      _indexes: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "distribute(address[],uint256[])"(
      _to: string[],
      _indexes: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    totalSupply(
      cardId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalSupply(uint256)"(
      cardId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxSupply(
      cardId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "maxSupply(uint256)"(
      cardId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mint(
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "mint(address,uint256,uint256,bytes)"(
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    airdrop(
      _from: string,
      _to: string[],
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "airdrop(address,address[],uint256[])"(
      _from: string,
      _to: string[],
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OperatorsChanged(operator: null, status: null): EventFilter;
  };

  estimateGas: {
    baseIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "baseIndex(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "currentIndex(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    from(overrides?: CallOverrides): Promise<BigNumber>;

    "from()"(overrides?: CallOverrides): Promise<BigNumber>;

    nft(overrides?: CallOverrides): Promise<BigNumber>;

    "nft()"(overrides?: CallOverrides): Promise<BigNumber>;

    operators(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "operators(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    setFrom(_from: string, overrides?: Overrides): Promise<BigNumber>;

    "setFrom(address)"(
      _from: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setCurrentIndex(
      _index: BigNumberish,
      _id: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setCurrentIndex(uint256,uint256)"(
      _index: BigNumberish,
      _id: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    changeOperator(
      _address: string,
      _status: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "changeOperator(address,bool)"(
      _address: string,
      _status: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    distribute(
      _to: string[],
      _indexes: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "distribute(address[],uint256[])"(
      _to: string[],
      _indexes: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    totalSupply(
      cardId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalSupply(uint256)"(
      cardId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxSupply(
      cardId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "maxSupply(uint256)"(
      cardId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mint(
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "mint(address,uint256,uint256,bytes)"(
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    airdrop(
      _from: string,
      _to: string[],
      _ids: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "airdrop(address,address[],uint256[])"(
      _from: string,
      _to: string[],
      _ids: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    baseIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "baseIndex(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "currentIndex(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    from(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "from()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nft(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nft()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    operators(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "operators(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setFrom(
      _from: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setFrom(address)"(
      _from: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setCurrentIndex(
      _index: BigNumberish,
      _id: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setCurrentIndex(uint256,uint256)"(
      _index: BigNumberish,
      _id: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    changeOperator(
      _address: string,
      _status: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "changeOperator(address,bool)"(
      _address: string,
      _status: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    distribute(
      _to: string[],
      _indexes: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "distribute(address[],uint256[])"(
      _to: string[],
      _indexes: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    totalSupply(
      cardId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalSupply(uint256)"(
      cardId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxSupply(
      cardId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "maxSupply(uint256)"(
      cardId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "mint(address,uint256,uint256,bytes)"(
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    airdrop(
      _from: string,
      _to: string[],
      _ids: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "airdrop(address,address[],uint256[])"(
      _from: string,
      _to: string[],
      _ids: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
