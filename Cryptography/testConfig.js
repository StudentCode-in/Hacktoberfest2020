
var BigNumber = require('../../node_modules/bignumber.js');
var ERC721Mintable = artifacts.require("./ERC721Mintable.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
var Verifier = artifacts.require("./Verifier.sol");

var proofJSON = {
    "proof":
    {
		"A":["0xc16825e9e81b90a31ff06aaf4a0e67c28b2e686f893bb9ee7524af4f9f4a9eb", "0x1002a0495da9bffb6116b048b3b777720df830ff04445e4299034e536c21ccca"],
		"A_p":["0xef97dbe5c2974865da4e3d6b6168b5daa7f10817643e3efc196d4b3e032693a", "0x1efc037bba8e7a0e070dd56eb0aab50e396570e27bb3c7ddf6f28ac743e797a2"],
		"B":
			[["0x4854a410e320cedad47e7ff0885731cb7692e26ee5272f00ab95f0ae63454ba", "0x6693a6aaa002bc8d9563329e6e060d9eb3dadc19e6de1e42b05e001e9ebd4b5"], ["0x218bfde5dd296116897431b6b37915fd4af8c918c15eea97a78ac6ab212b85", "0x4799edf327696d91467b19abfccdb96f3339e9a54d474bf51fea2b7d55ba3fd"]],
		
		"B_p":["0xc30dc5f38e377538887e767d88feaf28e23d4ab1e2524069df62603c9832702", "0x196d4c7dbba12a7a9c29d72f79585e14ad8d3e72e20503181237ce76b316c0dc"],
		"C":["0x11f4999f0e9c2addba261391aef4614de19c8d09d0cdc1f2f5d43587b9d3609b", "0xbcf6352f39c9a69581997987ada5faefe27800869eb0e8605bf6197d499462"],
		"C_p":["0x2b2d926293e6fcce413dcb7266077ccab12b56bc0631b6b5711f6233384d6f56", "0x5b7fced3f1145ba022a6414e7a16155f398815fab5634aba3304e992d3a021d"],
		"H":["0x1a4ece2b858e4326b691c30738c48105cad537df970a4637587516c6769d8e52", "0x2a08f5aaf8b31747a24460389c7857a97707b5203224e5b6f575302b9daf35ba"],
		"K":["0x247b492d3756023f51e2d275a3d07046024070f878a107eea454759f98dbd15a", "0xb1b1d83967dbd9db474c69210c7bbdb3a29a55c4427c278d64fe9d0ab55ff51"]
	},
	"input":[9,1]
}


var Config = async function (accounts) {

    const _owner = accounts[0];
    const _account_one = accounts[0];
    const _account_two = accounts[1];

    const proof = proofJSON['proof'];
    const input = proofJSON['input'];

    const _symbol = 'REM'
    const _name = 'Real Estate Marketplace'
    const _baseTokenURI = 'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/'
    const _firstTokenId = 1
    const _lastTokenId = 10

    let erc721Mintable = await ERC721Mintable.new(_name, _symbol, _baseTokenURI);
    let verifier = await Verifier.new();
    let solnSquareVerifier = await SolnSquareVerifier.new(verifier.address, _name, _symbol, _baseTokenURI);



    return {
        owner: _owner,
        account_one: _account_one,
        account_two: _account_two,
        firstTokenId: _firstTokenId,
        lastTokenId: _lastTokenId,
        proof: proof,
        input: input,
        name: _name,
        symbol: _symbol,
        baseTokenURI: _baseTokenURI,
        weiMultiple: (new BigNumber(10)).pow(18),
        myToken: erc721Mintable,
        solnSquareVerifier: solnSquareVerifier,
        verifier: verifier
    }
}

module.exports = {
    Config: Config
};