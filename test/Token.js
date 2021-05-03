import {BigNumber} from 'bignumber.js';
BigNumber.config({ ERRORS: false });

// STEM test.
const assertJump = require('./helpers/assertJump');
const assertFail = require('./helpers/assertFail');
const assertGas = require('./helpers/assertGas');
const timer = require('./helpers/timer');
const STEM = artifacts.require('STEM');

const MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";
let STEMToken;

/**
 * accounts[0] - admin
 * accounts[1] - minter
**/
contract('STEM', function(accounts) {

  beforeEach(async () => {
    STEMToken = await STEM.new("stem", "STEM", ~~(new Date().getTime()/1000) + 1*60, 777777, 7777777, {"from": accounts[0]});
  });

  it("Can't mint before postponed time", async function() {
    STEMToken.grantRole(MINTER_ROLE, accounts[1], {"from": accounts[0]});
    await timer(31); //add 31 seconds
    assertFail(STEMToken.mint(accounts[2], 1000, {"from": accounts[1]}));
  });

  it("Can mint after postponed time", async function() {
    STEMToken.grantRole(MINTER_ROLE, accounts[1], {"from": accounts[0]});
    await timer(65); //add 65 seconds
    STEMToken.mint(accounts[2], 1000, {"from": accounts[1]});
    assert.equal((await STEMToken.balanceOf(accounts[2])).toNumber(), 1000);
  });

  it("Can't mint if reached max supply", async function() {
    STEMToken.grantRole(MINTER_ROLE, accounts[1], {"from": accounts[0]});
    await timer(65); //add 65 seconds
    assertFail(STEMToken.mint(accounts[2], 7000000, {"from": accounts[1]}));
  });

  it("Can't mint if turned off", async function() {
    STEMToken.grantRole(MINTER_ROLE, accounts[1], {"from": accounts[0]});
    await timer(65); //add 65 seconds
    STEMToken.turnOffMint({"from": accounts[0]});
    assertFail(STEMToken.mint(accounts[2], 1000, {"from": accounts[1]}));
  });

});
