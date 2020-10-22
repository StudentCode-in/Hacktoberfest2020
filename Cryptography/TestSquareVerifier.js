var Test = require('../config/testConfig.js');

contract('Verifier', async (accounts) => {

    var config;
    var proof;
    var input;

    before('setup contract', async () => {
        config = await Test.Config(accounts);
        proof = config.proof;
        input = config.input;
    });

    describe('verification with correct proof', function () {

        // Test verification with correct proof
        it('Verifier.verifyTx(..) returns true with correct proof', async () => {
            const result = await config.verifier.verifyTx.call(
                proof.A,
                proof.A_p,
                proof.B,
                proof.B_p,
                proof.C,
                proof.C_p,
                proof.H,
                proof.K,
                input
            )
            console.log("The result is :" + result)
            assert(result, 'Incorrect Proof results')
        })
    });

    describe('verification with incorrect proof', function () {

        // Test verification with incorrect proof
        it('Verifier.verifyTx(..) returns false with incorrect proof', async () => {
            // just change A_p with A
            const result = await config.verifier.verifyTx.call(
                proof.A_p,
                proof.A,
                proof.B,
                proof.B_p,
                proof.C,
                proof.C_p,
                proof.H,
                proof.K,
                input
            )
            console.log("The result is :" + result)
            assert(!result, 'Incorrect Proof results')
        })
    });

});
