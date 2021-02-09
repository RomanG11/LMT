const { catchRevert, catchRevertMessage} = require("./exceptions.js");

const TokenSale = artifacts.require("TokenSale");
const TestToken = artifacts.require("TestToken");

contract("Pool tests", accounts => {

  let currentBlock;

  let wallet1Receiver = accounts[8];
  let wallet2Receiver = accounts[9];
  
  it("catch instances", async () => {
    TestLYMInstance = await TestToken.new('TestLYM','TLYM', '1000000000000000000000');
    TestLMTInstance = await TestToken.new('TestLMT','TLMT', '1000000000000000000000');

    currentBlock = await web3.eth.getBlockNumber();
    let block = await web3.eth.getBlock(currentBlock)

    TokenSaleInstance = await TokenSale.new(TestLYMInstance.address, TestLMTInstance.address, block.timestamp+100, wallet1Receiver, wallet2Receiver);

    await TestLMTInstance.transfer(TokenSaleInstance.address, '1000000000000000000000');
  })

  it('first stage buy check', async () => {
    await catchRevert(TokenSaleInstance.buy('8000000000000000000')); 
    await TestLYMInstance.approve(TokenSaleInstance.address, '1000000000000000000000');
    await catchRevertMessage(TokenSaleInstance.buy('8000000000000000000'), 'not a sale time');
    await fastForward(100);
    await TokenSaleInstance.buy('8000000000000000000'); //8 tokens

    let balance = await TestLMTInstance.balanceOf(accounts[0]);
    let userBalance = await TokenSaleInstance.balancesStage1(accounts[0])

    assert.equal(balance.toString(), '500000000000000000');
    assert.equal(userBalance.toString(), '500000000000000000')

    await fastForward(86000);
    await TokenSaleInstance.buy('8000000000000000000');

    balance = await TestLMTInstance.balanceOf(accounts[0]);
    userBalance = await TokenSaleInstance.balancesStage1(accounts[0])

    assert.equal(balance.toString(), '1000000000000000000');
    assert.equal(userBalance.toString(), '1000000000000000000')
  })

  it('try to withdraw unsold tokens after 1st stage', async () => {
    await catchRevertMessage(TokenSaleInstance.withdrawUnsoldTokens(), 'not a finish time');
  })

  it('second stage buy check', async () => {
    await fastForward(604800);
    await catchRevertMessage(TokenSaleInstance.buy('12000000000000000000'), 'not a sale time');

    await fastForward(400);
    await TokenSaleInstance.buy('12000000000000000000'); //12 tokens

    let balance = await TestLMTInstance.balanceOf(accounts[0]);
    let userBalance = await TokenSaleInstance.balancesStage2(accounts[0])

    assert.equal(balance.toString(), '1500000000000000000');
    assert.equal(userBalance.toString(), '500000000000000000')

    await fastForward(80000);
    await TokenSaleInstance.buy('12000000000000000000');

    balance = await TestLMTInstance.balanceOf(accounts[0]);
    userBalance = await TokenSaleInstance.balancesStage2(accounts[0])

    assert.equal(balance.toString(), '2000000000000000000');
    assert.equal(userBalance.toString(), '1000000000000000000')
  })

  it('try to withdraw unsold tokens in 2nd stage', async () => {
    await catchRevertMessage(TokenSaleInstance.withdrawUnsoldTokens(), 'not a finish time');
  })

  it('move forward to stage 2 finish', async () => {
    await fastForward(80000);
    await catchRevertMessage(TokenSaleInstance.buy('12000000000000000000'), 'not a sale time');
  })

  it('check claim functions', async () => {
    let toClaim = await TokenSaleInstance.tokensToClaim(accounts[0]);
    let toClaimStage1 = await TokenSaleInstance.calculateTokensToClaimStage1(accounts[0]);
    let toClaimStage2 = await TokenSaleInstance.calculateTokensToClaimStage2(accounts[0]);

    assert.equal(0.1, toClaim.toString() / Math.pow(10,18));
    assert.equal(0.1, toClaimStage1.toString() / Math.pow(10,18));
    assert.equal(0, toClaimStage2.toString() / Math.pow(10,18));

    let previousBalance = await TestLMTInstance.balanceOf(accounts[0])

    //1 week first stage
    await TokenSaleInstance.claim();

    let newBalance = await TestLMTInstance.balanceOf(accounts[0])
    assert.equal(0.1, newBalance.sub(previousBalance).toString() / Math.pow(10,18))

    //check again
    toClaim = await TokenSaleInstance.tokensToClaim(accounts[0]);
    toClaimStage1 = await TokenSaleInstance.calculateTokensToClaimStage1(accounts[0]);

    assert.equal(0, toClaim.toString() / Math.pow(10,18));
    assert.equal(0, toClaimStage1.toString() / Math.pow(10,18));

    //try to call claim again 
    await catchRevertMessage(TokenSaleInstance.claim(), 'nothing to claim');
  })


  it('move 2 weeks forward and check claim', async () => {
    await fastForward(1209600);
    let toClaim = await TokenSaleInstance.tokensToClaim(accounts[0]);
    let toClaimStage1 = await TokenSaleInstance.calculateTokensToClaimStage1(accounts[0]);
    let toClaimStage2 = await TokenSaleInstance.calculateTokensToClaimStage2(accounts[0]);

    assert.equal(0.4, toClaim.toString() / Math.pow(10,18));
    assert.equal(0.2, toClaimStage1.toString() / Math.pow(10,18));
    assert.equal(0.2, toClaimStage2.toString() / Math.pow(10,18));

    let previousBalance = await TestLMTInstance.balanceOf(accounts[0])

    //1 week first stage
    await TokenSaleInstance.claim();

    let newBalance = await TestLMTInstance.balanceOf(accounts[0])
    assert.equal(0.4, newBalance.sub(previousBalance).toString() / Math.pow(10,18))

    //check again
    toClaim = await TokenSaleInstance.tokensToClaim(accounts[0]);
    toClaimStage1 = await TokenSaleInstance.calculateTokensToClaimStage1(accounts[0]);
    toClaimStage2 = await TokenSaleInstance.calculateTokensToClaimStage2(accounts[0]);

    assert.equal(0, toClaim.toString() / Math.pow(10,18));
    assert.equal(0, toClaimStage1.toString() / Math.pow(10,18));
    assert.equal(0, toClaimStage2.toString() / Math.pow(10,18));

    //try to call claim again 
    await catchRevertMessage(TokenSaleInstance.claim(), 'nothing to claim');
  })

  it('move 5 weeks forward and check claim', async () => {
    await fastForward(3024000);
    let toClaim = await TokenSaleInstance.tokensToClaim(accounts[0]);
    let toClaimStage1 = await TokenSaleInstance.calculateTokensToClaimStage1(accounts[0]);
    let toClaimStage2 = await TokenSaleInstance.calculateTokensToClaimStage2(accounts[0]);

    assert.equal(1, toClaim.toString() / Math.pow(10,18));
    assert.equal(0.5, toClaimStage1.toString() / Math.pow(10,18));
    assert.equal(0.5, toClaimStage2.toString() / Math.pow(10,18));


    let previousBalance = await TestLMTInstance.balanceOf(accounts[0])

    //1 week first stage
    await TokenSaleInstance.claim();

    let newBalance = await TestLMTInstance.balanceOf(accounts[0])

    assert.equal(1, newBalance.sub(previousBalance).toString() / Math.pow(10,18))

    //check again
    toClaim = await TokenSaleInstance.tokensToClaim(accounts[0]);
    toClaimStage1 = await TokenSaleInstance.calculateTokensToClaimStage1(accounts[0]);
    toClaimStage2 = await TokenSaleInstance.calculateTokensToClaimStage2(accounts[0]);

    assert.equal(0, toClaim.toString() / Math.pow(10,18));
    assert.equal(0, toClaimStage1.toString() / Math.pow(10,18));
    assert.equal(0, toClaimStage2.toString() / Math.pow(10,18));

    //try to call claim again 
    await catchRevertMessage(TokenSaleInstance.claim(), 'nothing to claim');
  })

  it('move to the last week+1 forward and check claim', async () => {
    await fastForward(3024000);
    let toClaim = await TokenSaleInstance.tokensToClaim(accounts[0]);
    let toClaimStage1 = await TokenSaleInstance.calculateTokensToClaimStage1(accounts[0]);
    let toClaimStage2 = await TokenSaleInstance.calculateTokensToClaimStage2(accounts[0]);

    assert.equal(0.5, toClaim.toString() / Math.pow(10,18));
    assert.equal(0.2, toClaimStage1.toString() / Math.pow(10,18));
    assert.equal(0.3, toClaimStage2.toString() / Math.pow(10,18));

    let previousBalance = await TestLMTInstance.balanceOf(accounts[0])

    //1 week first stage
    await TokenSaleInstance.claim();

    let newBalance = await TestLMTInstance.balanceOf(accounts[0])

    assert.equal(0.5, newBalance.sub(previousBalance).toString() / Math.pow(10,18))

    //check again
    toClaim = await TokenSaleInstance.tokensToClaim(accounts[0]);
    toClaimStage1 = await TokenSaleInstance.calculateTokensToClaimStage1(accounts[0]);
    toClaimStage2 = await TokenSaleInstance.calculateTokensToClaimStage2(accounts[0]);

    assert.equal(0, toClaim.toString() / Math.pow(10,18));
    assert.equal(0, toClaimStage1.toString() / Math.pow(10,18));
    assert.equal(0, toClaimStage2.toString() / Math.pow(10,18));

    //try to call claim again 
    await catchRevertMessage(TokenSaleInstance.claim(), 'nothing to claim');
  })

  it('withdraw unsold tokens', async () => {
    await catchRevertMessage(TokenSaleInstance.withdrawUnsoldTokens({from: accounts[1]}), 'Ownable: caller is not the owner');
    let tokenSaleBalance = await TestLMTInstance.balanceOf(TokenSaleInstance.address);

    let lmtTokensLocked = await TokenSaleInstance.lmtTokensLocked();

    let toWithdraw = tokenSaleBalance.sub(lmtTokensLocked).toString() / Math.pow(10,18);

    await TokenSaleInstance.withdrawUnsoldTokens();

    let receiver1Balance = await TestLMTInstance.balanceOf(wallet1Receiver);
    let receiver2Balance = await TestLMTInstance.balanceOf(wallet2Receiver);

    assert.equal(332, receiver1Balance.toString() / Math.pow(10,18))
    assert.equal(664, receiver2Balance.toString() / Math.pow(10,18))
  })

  it('withdraw lost tokens', async () => {
    let LYMContractPreviousBalance = await TestLYMInstance.balanceOf(TokenSaleInstance.address);
    let LYMOwnerPreviousBalance = await TestLYMInstance.balanceOf(accounts[0]);
    await catchRevertMessage(TokenSaleInstance.withdrawLostTokens(TestLYMInstance.address, {from: accounts[1]}), 'Ownable: caller is not the owner');
    await TokenSaleInstance.withdrawLostTokens(TestLYMInstance.address);

    let LYMCurrentBalance = await TestLYMInstance.balanceOf(TokenSaleInstance.address);
    let LYMOwnerCurrentBalance = await TestLYMInstance.balanceOf(accounts[0]);

    assert.equal(LYMOwnerCurrentBalance.sub(LYMOwnerPreviousBalance).toString(), LYMContractPreviousBalance.toString());
    assert.equal(0, LYMCurrentBalance.toNumber());
  })
});

const fastForward = async seconds => {
  await send({
    method: 'evm_increaseTime',
    params: [seconds],
  });

  await mineBlock();
};

const send = payload => {
  if (!payload.jsonrpc) payload.jsonrpc = '2.0';
  if (!payload.id) payload.id = new Date().getTime();

  return new Promise((resolve, reject) => {
    web3.currentProvider.send(payload, (error, result) => {
      if (error) return reject(error);

      return resolve(result);
    });
  });
};

const mineBlock = () => send({ method: 'evm_mine' });