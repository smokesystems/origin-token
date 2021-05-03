const STEM = artifacts.require("STEM");

module.exports = function (deployer, network, accounts) {
    deployer.deploy(STEM, "stem", "STEM",
        ~~(new Date().getTime()/1000) + 365*24*60*60, 777777, 7777777).then(() => {
        return STEM.deployed()
                .then((instance) => {
                  console.log("STEMAdress", instance.address);
                });
    });
};
