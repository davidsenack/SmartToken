var SmartToken = artifacts.require("SmartToken");

module.exports = function(deployer) {
    // Deploy SmartToken contract
    deployer.deploy(SmartToken);
};