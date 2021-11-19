const Token = artifacts.require("Token");
const EthSwap = artifacts.require("EthSwap");

module.exports = function(deployer) {
  //await deployer.deploy(EthSwap, token.address);
  //deploy token 
  deployer.deploy(Token);
  //deploy ethswap
  deployer.deploy(EthSwap);
};
