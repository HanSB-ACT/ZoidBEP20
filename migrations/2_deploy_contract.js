var token = artifacts.require("BEP20Token");

module.exports = function (deployer) {
  deployer.deploy(token);
};
