var TwogapContract = artifacts.require("TwogapContract");
var TwogapContractCrowdsale = artifacts.require("TwogapContractCrowdsale");

module.exports = function (deployer, network, accounts) {
  /*deployer.deploy(twogap, {
    gas: 4612388
  });*/
  return deployer
  .then(() => {
    return deployer.deploy(TwogapContract, {
      gas: 4612388
    });
  })
  .then(() => {
    const startTime = latestTime() + duration.minutes(1);
    const endTime = startTime + duration.days(45);
    const goal = web3.toWei(250, 'ether');
    const cap = web3.toWei(4000, 'ether');
    const rate = 2500;
    const wallet = 0xD0Bf4c0F00E475cA180D7586D406Fd6C3559455D;
    /*return deployer.deploy(TwogapContractCrowdsale, startTime, endTime, rate, wallet, TwogapContract.address, cap, goal, {
      gas: 4612388
    })*/
    return deployer.deploy(TwogapContractCrowdsale, rate, TwogapContract.address, {
      gas: 4612388
    })
  })
};

function latestTime() {
  return web3.eth.getBlock('latest').timestamp;
}

const duration = {
  seconds: function (val) { return val; },
  minutes: function (val) { return val * this.seconds(60); },
  hours: function (val) { return val * this.minutes(60); },
  days: function (val) { return val * this.hours(24); },
  weeks: function (val) { return val * this.days(7); },
  years: function (val) { return val * this.days(365); },
};