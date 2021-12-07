const TestToken = artifacts.require("TestToken");
const Multisend = artifacts.require("Multisend");

const tokenAddress = "0x6dfE64783253Cf1a8C99E4727080025A4bf0FcD7";
// const tokenAddress = "";

module.exports = async(deployer, network, accounts) => {


  // let TokenInstance = await TestToken.new("TEST", "TST", "50000000000000000000000");
  let TokenInstance = await TestToken.at("0x327673ae6b33bd3d90f0096870059994f30dc8af");

  // let MultisendInstance = await Multisend.new();
  let MultisendInstance = await Multisend.at("0x4059Df84DfB705993f3a2Ed54dbD073458eF13Ec");




  let addresses = [];
  let values = [];

  // await TokenInstance.approve(MultisendInstance.address, "51000000000000000000000");
  let txCount = 0;
  for(let i = 1801; i < 1901; i++) {
    let random = String(getRandomInt(10, 29) * 1e18);
    // console.log(random);

    addresses.push(accounts[i]);
    values.push(random);

    if(i % 100 == 0) {
      txCount++;
      console.log("TX sent: " + txCount);
      await MultisendInstance.multisend(TokenInstance.address, addresses, values);
      addresses = [];
      values = [];

    }
  }
  
  console.log("Done");
  return;
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
	// await deployer.deploy(Utils);
 //  await deployer.deploy(ProxyContract);

 //  uint256 _maxSupply,
	// 	uint256 _initialSupply,
	// 	string calldata _uri,
	// 	bytes calldata _data