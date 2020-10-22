
var Test = require('../config/testConfig.js');
var BigNumber = require('../../node_modules/bignumber.js');

contract('ERC721Mintable', async (accounts) => {

    before('setup contract', async () => {
        config = await Test.Config(accounts);
    });

    describe('match erc721 spec', function () {

        it('should mint 10 tokens', async function () {

            config.myToken.Transfer()
                .on('data', (event) => {
                })
                .on('error', console.error);

            const tokenId = config.firstTokenId

            for (let i = tokenId; i <= config.lastTokenId; i++) {
                let status = await config.myToken.mint(config.owner, i, { from: config.owner });
            }

        })

        it('should return total supply', async function () {

            let status = await config.myToken.totalSupply.call();
            assert.equal(status, config.lastTokenId, "total supply is  not  correct");

        })

        it('should get token balance', async function () {

            let status = await config.myToken.balanceOf.call(config.owner);
            assert.equal(status, config.lastTokenId, "balanceOf  is  not  correct");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () {

            const tokenId = config.firstTokenId
            let expectedTokenUri = config.baseTokenURI.concat(tokenId)

            let status = await config.myToken.tokenURI.call(tokenId, { from: config.owner });
            assert.equal(status, expectedTokenUri, "token uri  is  not  complete");

        })

        it('should transfer token from one owner to another', async function () {
            const tokenId = config.firstTokenId
            let status1 = await config.myToken.approve(config.account_two, tokenId,
                { from: config.owner });
            let status2 = await config.myToken.transferFrom(config.owner, config.account_two, tokenId,
                { from: config.owner });
            let status3 = await config.myToken.ownerOf.call(tokenId);
            assert.equal(status3, config.account_two, "new owner of token  is  not  correct");
        })
    });

    describe('have ownership properties', function () {

        it('should return contract owner', async function () {
            let status = await config.myToken.owner.call();
            assert.equal(status, config.owner, "account[0] is owner");
        })

        it('should fail when minting when address is not contract owner', async function () {

            const tokenId = config.lastTokenId + 1

            try {
                await config.myToken.mint(config.account_two, tokenId, { from: config.account_two });
            }
            catch (e) {
                console.log('\nMinting Error : ', e.reason);
            }
        })

    });

});
