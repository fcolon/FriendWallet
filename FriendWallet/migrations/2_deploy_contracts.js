var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var MetaCoin2 = artifacts.require("./MetaCoin2.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.link(ConvertLib, MetaCoin2);
  deployer.deploy(MetaCoin);
  deployer.deploy(MetaCoin2);
};
