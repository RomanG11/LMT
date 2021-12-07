const SalePoolUtils = artifacts.require("SalePoolUtils");
const ProxyContract = artifacts.require("Proxy");
const LympoNFT = artifacts.require("LympoNFT");
const SalePool = artifacts.require("SalePool");
const TestToken = artifacts.require("TestToken");

const proxyRegistryAddress = "0xa5409ec958c83c3f309868babaca7c86dcb077c1"
const proxyRegistryAddressRINKEBY = "0xf57b2c51ded3a29e6891aba85459d600256cf317"

const tokenAddress = "0x6dfE64783253Cf1a8C99E4727080025A4bf0FcD7";
// const tokenAddress = "";

module.exports = async(deployer, network, accounts) => {
  return;
  // let A = await TestToken.at(tokenAddress)
  // let b = "0x6dfE64783253Cf1a8C99E4727080025A4bf0FcD7"

  // await A.approve(b, 0);
  // return;
  
  //Main nft
  //@TODO change it
  await deployer.deploy(LympoNFT, proxyRegistryAddressRINKEBY);

  let NftInstance = await LympoNFT.deployed();

  //Athletes
  await NftInstance.create(5000, 1, "", "0x");
  await NftInstance.create(1000, 1, "", "0x");
  await NftInstance.create(100, 1, "", "0x");
  await NftInstance.create(25, 1, "", "0x");
  await NftInstance.create(5, 1, "", "0x");
  await NftInstance.create(1, 1, "", "0x");
  await NftInstance.create(5000, 1, "", "0x");
  await NftInstance.create(1000, 1, "", "0x");
  await NftInstance.create(100, 1, "", "0x");
  await NftInstance.create(25, 1, "", "0x");
  await NftInstance.create(5, 1, "", "0x");
  await NftInstance.create(1, 1, "", "0x");
  await NftInstance.create(5000, 1, "", "0x");
  await NftInstance.create(1000, 1, "", "0x");
  await NftInstance.create(100, 1, "", "0x");
  await NftInstance.create(25, 1, "", "0x");
  await NftInstance.create(5, 1, "", "0x");
  await NftInstance.create(1, 1, "", "0x");
  await NftInstance.create(5000, 1, "", "0x");
  await NftInstance.create(1000, 1, "", "0x");
  await NftInstance.create(100, 1, "", "0x");
  await NftInstance.create(25, 1, "", "0x");
  await NftInstance.create(5, 1, "", "0x");
  await NftInstance.create(1, 1, "", "0x");

  //o'Lympians
  await NftInstance.create(5000, 1, "", "0x");
  await NftInstance.create(1000, 1, "", "0x");
  await NftInstance.create(100, 1, "", "0x");
  await NftInstance.create(25, 1, "", "0x");
  await NftInstance.create(5, 1, "", "0x");
  await NftInstance.create(5000, 1, "", "0x");
  await NftInstance.create(1000, 1, "", "0x");
  await NftInstance.create(100, 1, "", "0x");
  await NftInstance.create(25, 1, "", "0x");
  await NftInstance.create(5, 1, "", "0x");
  await NftInstance.create(5000, 1, "", "0x");
  await NftInstance.create(1000, 1, "", "0x");
  await NftInstance.create(100, 1, "", "0x");
  await NftInstance.create(25, 1, "", "0x");
  await NftInstance.create(5, 1, "", "0x");
  await NftInstance.create(5000, 1, "", "0x");
  await NftInstance.create(1000, 1, "", "0x");
  await NftInstance.create(100, 1, "", "0x");
  await NftInstance.create(25, 1, "", "0x");
  await NftInstance.create(5, 1, "", "0x");
  await NftInstance.create(5000, 1, "", "0x");
  await NftInstance.create(1000, 1, "", "0x");
  await NftInstance.create(100, 1, "", "0x");
  await NftInstance.create(25, 1, "", "0x");
  await NftInstance.create(5, 1, "", "0x");

  // Token part
  let LmtTokenInstance;
  if(tokenAddress === "") {
  	LmtTokenInstance = await deployer.deploy(TestToken, "Test LMT", "TLMT", "1000000000000000000000000");
  } else {
  	LmtTokenInstance = await TestToken.at(tokenAddress);
  }


  // Sale contract

  let SalePoolUtilsImpl = await deployer.deploy(SalePoolUtils)
  let SalePoolUtilsProxy = await deployer.deploy(ProxyContract);

  await SalePoolUtilsProxy.setImplementation(SalePoolUtilsImpl.address);

  let SalePoolInstance = await deployer.deploy(SalePool, NftInstance.address, LmtTokenInstance.address, SalePoolUtilsProxy.address);
  await SalePoolInstance.addCard(1, "3000000000000000000");
  await SalePoolInstance.addCard(2, "10000000000000000000");
  await SalePoolInstance.addCard(3, "70000000000000000000");
  await SalePoolInstance.addCard(4, "150000000000000000000");
  await SalePoolInstance.addCard(5, "220000000000000000000");

  await SalePoolInstance.addCard(7, "3000000000000000000");
  await SalePoolInstance.addCard(8, "10000000000000000000");
  await SalePoolInstance.addCard(9, "70000000000000000000");
  await SalePoolInstance.addCard(10, "150000000000000000000");
  await SalePoolInstance.addCard(11, "220000000000000000000");

  await SalePoolInstance.addCard(13, "3000000000000000000");
  await SalePoolInstance.addCard(14, "10000000000000000000");
  await SalePoolInstance.addCard(15, "70000000000000000000");
  await SalePoolInstance.addCard(16, "150000000000000000000");
  await SalePoolInstance.addCard(17, "220000000000000000000");

  await SalePoolInstance.addCard(19, "3000000000000000000");
  await SalePoolInstance.addCard(20, "10000000000000000000");
  await SalePoolInstance.addCard(21, "70000000000000000000");
  await SalePoolInstance.addCard(22, "150000000000000000000");
  await SalePoolInstance.addCard(23, "220000000000000000000");

  let OlympianSalePoolInstance = await deployer.deploy(SalePool, NftInstance.address, LmtTokenInstance.address, SalePoolUtilsProxy.address);

  await OlympianSalePoolInstance.addCard(25, "3000000000000000000");
  await OlympianSalePoolInstance.addCard(26, "10000000000000000000");
  await OlympianSalePoolInstance.addCard(27, "70000000000000000000");
  await OlympianSalePoolInstance.addCard(28, "150000000000000000000");
  await OlympianSalePoolInstance.addCard(29, "220000000000000000000");

  await OlympianSalePoolInstance.addCard(30, "3000000000000000000");
  await OlympianSalePoolInstance.addCard(31, "10000000000000000000");
  await OlympianSalePoolInstance.addCard(32, "70000000000000000000");
  await OlympianSalePoolInstance.addCard(33, "150000000000000000000");
  await OlympianSalePoolInstance.addCard(34, "220000000000000000000");

  await OlympianSalePoolInstance.addCard(35, "3000000000000000000");
  await OlympianSalePoolInstance.addCard(36, "10000000000000000000");
  await OlympianSalePoolInstance.addCard(37, "70000000000000000000");
  await OlympianSalePoolInstance.addCard(38, "150000000000000000000");
  await OlympianSalePoolInstance.addCard(39, "220000000000000000000");

  await OlympianSalePoolInstance.addCard(40, "3000000000000000000");
  await OlympianSalePoolInstance.addCard(41, "10000000000000000000");
  await OlympianSalePoolInstance.addCard(42, "70000000000000000000");
  await OlympianSalePoolInstance.addCard(43, "150000000000000000000");
  await OlympianSalePoolInstance.addCard(44, "220000000000000000000");

  await OlympianSalePoolInstance.addCard(45, "3000000000000000000");
  await OlympianSalePoolInstance.addCard(46, "10000000000000000000");
  await OlympianSalePoolInstance.addCard(47, "70000000000000000000");
  await OlympianSalePoolInstance.addCard(48, "150000000000000000000");
  await OlympianSalePoolInstance.addCard(49, "220000000000000000000");

  await NftInstance.addMinter(SalePoolInstance.address);
  await NftInstance.addMinter(OlympianSalePoolInstance.address);

  console.log("LmtTokenInstance: ", LmtTokenInstance.address);
  console.log("NftInstance: ", NftInstance.address);
  console.log("SalePoolInstance: ", SalePoolInstance.address);
  console.log("OlympianSalePoolInstance: ", OlympianSalePoolInstance.address);
  console.log("SalePoolUtilsProxy: ", SalePoolUtilsProxy.address);
  console.log("SalePoolUtilsImpl: ", SalePoolUtilsImpl.address);
  console.log("Done");
};
	// await deployer.deploy(Utils);
 //  await deployer.deploy(ProxyContract);

 //  uint256 _maxSupply,
	// 	uint256 _initialSupply,
	// 	string calldata _uri,
	// 	bytes calldata _data