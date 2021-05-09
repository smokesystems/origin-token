const STEM = artifacts.require("STEM");

module.exports = function (deployer, network, accounts) {
    deployer.deploy(STEM, "STEM", "STEM",
        ~~(new Date().getTime()/1000) + 365*24*60*60, "777777000000000000000000", "7777777000000000000000000").then(() => {
        return STEM.deployed()
                .then((instance) => {
                  console.log("STEMAdress", instance.address);
                });
    });
};
