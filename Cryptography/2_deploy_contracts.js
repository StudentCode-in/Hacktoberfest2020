// migrating the appropriate contracts
var ERC721Mintable = artifacts.require("./ERC721Mintable.sol");
var Verifier = artifacts.require("./Verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");


module.exports = function (deployer) {

  let sysmbol = 'REM'
  let name = 'Real Estate Marketplace'
  let baseTokenURI = 'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/'

  deployer.deploy(ERC721Mintable, name, sysmbol, baseTokenURI);
  deployer.deploy(Verifier)
    .then(() => {
      return deployer.deploy(SolnSquareVerifier, Verifier.address, name, sysmbol, baseTokenURI)
    });

};
