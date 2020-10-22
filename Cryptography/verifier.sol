// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

pragma solidity >=0.4.21 <0.6.0;

library Pairing {
    struct G1Point {
        uint X;
        uint Y;
    }
    // Encoding of field elements is: X[0] * z + X[1]
    struct G2Point {
        uint[2] X;
        uint[2] Y;
    }
    /// @return the generator of G1
    function P1() pure internal returns (G1Point memory) {
        return G1Point(1, 2);
    }
    /// @return the generator of G2
    function P2() pure internal returns (G2Point memory) {
        return G2Point(
            [11559732032986387107991004021392285783925812861821192530917403151452391805634,
             10857046999023057135944570762232829481370756359578518086990519993285655852781],
            [4082367875863433681332203403145435568316851327593401208105741076214120093531,
             8495653923123431417604973247489272438418190587263600148770280649306958101930]
        );
    }
    /// @return the negation of p, i.e. p.addition(p.negate()) should be zero.
    function negate(G1Point memory p) pure internal returns (G1Point memory) {
        // The prime q in the base field F_q for G1
        uint q = 21888242871839275222246405745257275088696311157297823662689037894645226208583;
        if (p.X == 0 && p.Y == 0)
            return G1Point(0, 0);
        return G1Point(p.X, q - (p.Y % q));
    }
    /// @return the sum of two points of G1
    function addition(G1Point memory p1, G1Point memory  p2) internal returns (G1Point memory  r) {
        uint[4] memory input;
        input[0] = p1.X;
        input[1] = p1.Y;
        input[2] = p2.X;
        input[3] = p2.Y;
        bool success;
        assembly {
            success := call(sub(gas, 2000), 6, 0, input, 0xc0, r, 0x60)
            // Use "invalid" to make gas estimation work
            switch success case 0 { invalid() }
        }
        require(success);
    }
    /// @return the product of a point on G1 and a scalar, i.e.
    /// p == p.scalar_mul(1) and p.addition(p) == p.scalar_mul(2) for all points p.
    function scalar_mul(G1Point memory  p, uint s) internal returns (G1Point memory  r) {
        uint[3] memory input;
        input[0] = p.X;
        input[1] = p.Y;
        input[2] = s;
        bool success;
        assembly {
            success := call(sub(gas, 2000), 7, 0, input, 0x80, r, 0x60)
            // Use "invalid" to make gas estimation work
            switch success case 0 { invalid() }
        }
        require (success);
    }
    /// @return the result of computing the pairing check
    /// e(p1[0], p2[0]) *  .... * e(p1[n], p2[n]) == 1
    /// For example pairing([P1(), P1().negate()], [P2(), P2()]) should
    /// return true.
    function pairing(G1Point[] memory  p1, G2Point[] memory  p2) internal returns (bool) {
        require(p1.length == p2.length);
        uint elements = p1.length;
        uint inputSize = elements * 6;
        uint[] memory input = new uint[](inputSize);
        for (uint i = 0; i < elements; i++)
        {
            input[i * 6 + 0] = p1[i].X;
            input[i * 6 + 1] = p1[i].Y;
            input[i * 6 + 2] = p2[i].X[0];
            input[i * 6 + 3] = p2[i].X[1];
            input[i * 6 + 4] = p2[i].Y[0];
            input[i * 6 + 5] = p2[i].Y[1];
        }
        uint[1] memory out;
        bool success;
        assembly {
            success := call(sub(gas, 2000), 8, 0, add(input, 0x20), mul(inputSize, 0x20), out, 0x20)
            // Use "invalid" to make gas estimation work
            switch success case 0 { invalid() }
        }
        require(success);
        return out[0] != 0;
    }
    /// Convenience method for a pairing check for two pairs.
    function pairingProd2(G1Point memory  a1, G2Point memory  a2, G1Point memory  b1, G2Point memory  b2) internal returns (bool) {
        G1Point[] memory p1 = new G1Point[](2);
        G2Point[] memory p2 = new G2Point[](2);
        p1[0] = a1;
        p1[1] = b1;
        p2[0] = a2;
        p2[1] = b2;
        return pairing(p1, p2);
    }
    /// Convenience method for a pairing check for three pairs.
    function pairingProd3(
            G1Point memory  a1, G2Point memory  a2,
            G1Point memory  b1, G2Point memory  b2,
            G1Point memory  c1, G2Point memory  c2
    ) internal returns (bool) {
        G1Point[] memory p1 = new G1Point[](3);
        G2Point[] memory p2 = new G2Point[](3);
        p1[0] = a1;
        p1[1] = b1;
        p1[2] = c1;
        p2[0] = a2;
        p2[1] = b2;
        p2[2] = c2;
        return pairing(p1, p2);
    }
    /// Convenience method for a pairing check for four pairs.
    function pairingProd4(
            G1Point memory  a1, G2Point memory  a2,
            G1Point memory  b1, G2Point memory  b2,
            G1Point memory  c1, G2Point memory  c2,
            G1Point memory  d1, G2Point memory  d2
    ) internal returns (bool) {
        G1Point[] memory p1 = new G1Point[](4);
        G2Point[] memory p2 = new G2Point[](4);
        p1[0] = a1;
        p1[1] = b1;
        p1[2] = c1;
        p1[3] = d1;
        p2[0] = a2;
        p2[1] = b2;
        p2[2] = c2;
        p2[3] = d2;
        return pairing(p1, p2);
    }
}
contract Verifier {
    using Pairing for *;
    struct VerifyingKey {
        Pairing.G2Point A;
        Pairing.G1Point B;
        Pairing.G2Point C;
        Pairing.G2Point gamma;
        Pairing.G1Point gammaBeta1;
        Pairing.G2Point gammaBeta2;
        Pairing.G2Point Z;
        Pairing.G1Point[] IC;
    }
    struct Proof {
        Pairing.G1Point A;
        Pairing.G1Point A_p;
        Pairing.G2Point B;
        Pairing.G1Point B_p;
        Pairing.G1Point C;
        Pairing.G1Point C_p;
        Pairing.G1Point K;
        Pairing.G1Point H;
    }
    function verifyingKey() pure internal returns (VerifyingKey memory vk) {
        vk.A = Pairing.G2Point([0x2f43c025baabde2d214d81d3386da3b0ea36d3de68de08116fa17705150687ac, 0x153b0556d74e01623945af6136fcba8932acdfa338899e4291d541dcc5d067b3], [0x90f3875379310e905e75a1040d52211f828ed43f9f68aa669d02306aca58abd, 0x1eb476cb47b8d5d54c58b57c38a51cc1eef5d76e6ba39be85ea65106d0040a1e]);
        vk.B = Pairing.G1Point(0x10e4dc957999edde23c2317b1b6ee365f3356d65222ef043b3acdcaedf582435, 0x24b405836f78ab273cb937674a6aafc6607b90e8836ef0e38e63a56686b08699);
        vk.C = Pairing.G2Point([0x20bd97cce03cada665512892dda1ef66fa0a030ae5284e9416c6cb594cadde39, 0x28199add1ec08522dbdcf82d47147652278f02ea74cce2a7b494ea6077d28b1d], [0x1750f4915a96d9d6ac19fc0c7735231c12c683510f32ee02424fd9e9be4cab5b, 0x952ac951128afe296cd972f31f6dace5dcbd15c0ef5b24b8fa8f54eed632266]);
        vk.gamma = Pairing.G2Point([0xdc38760e0b685899d097b8e71812c67274468414be787be50920f73a3af2d17, 0x2368b89ce3b3b5fe718c4894055f1194382f55a5916f14176251981b72f80346], [0x228820be1b8a9d5d0c83c3ab8ebac56f8e4ab044a24e2a63a4d77c5ec8ba0e2, 0x29256515fcca1e5d8b31d10312ec8de78481953a3f4d5e6bcc995166c1b99106]);
        vk.gammaBeta1 = Pairing.G1Point(0x14c5cc68b2766bd9547d7bb8430c256fa0a53d057ae361d2cdc95ba89755bab4, 0x932c9927351159bd5a9585f80ea024551689778fdc12341697b36c88572d180);
        vk.gammaBeta2 = Pairing.G2Point([0x77f5ded520c1659f3a952569283ebccfa04b15e4f384d677f8ce53e8c6afec1, 0x1d056ec5d0a10554122815841443dcf4a03867bdf631ebe506bef26413cba5c5], [0x2a362f5d995f6f7a610f0686ce2bd0af3dae08a8d4a28cc542a736845be3e583, 0x11e1c0eb1b35064f0cc5001c1af823cf399c4d031c80730dd0cefd9a3dd9c434]);
        vk.Z = Pairing.G2Point([0x1ad491d1e7de61ed63af88a10cdbed1f46a2d760aa7ee1491c6c6bfac2eb84eb, 0x266dcf64d8cce7590179c202d2b703cb7fb60e15e9227aeaa36204f5ecf6b98], [0x116cef429376c09179934e3df4f9cc6373b400161225dcf48447b86c1177fcc5, 0x2e1cf5ad745b4319d9a69fc97591e6083e01f849b9f8e991c73a8b221e9114da]);
        vk.IC = new Pairing.G1Point[](3);
        vk.IC[0] = Pairing.G1Point(0x29adb4e46b2fc419863dbdfc3a23748f55efee016dea45bcd5b9536dd7ec3269, 0x8a6d9f8fccedb5402c0af539caa10f7389348fec0a38e93fd461b76c9d34422);
        vk.IC[1] = Pairing.G1Point(0x2b46698190eb6b3fd319396b64326d037d3cceabcb62510829a4b4d65315cb05, 0xbbcb6b3b7318f4a3a274e63ef3c42e560476a8d2f1cad6ef0429cd782568d);
        vk.IC[2] = Pairing.G1Point(0x1a30a68469f9a6eebbac9aad49ca0eb6e53ee2aeec1f99582c280075b15c13a8, 0x2b13b542d079364a58dafa03f4a62fa63e41414b09f37ff8892eae2de1fc67c);
    }
    function verify(uint[] memory  input, Proof memory  proof) internal returns (uint) {
        VerifyingKey memory vk = verifyingKey();
        require(input.length + 1 == vk.IC.length);
        // Compute the linear combination vk_x
        Pairing.G1Point memory vk_x = Pairing.G1Point(0, 0);
        for (uint i = 0; i < input.length; i++)
            vk_x = Pairing.addition(vk_x, Pairing.scalar_mul(vk.IC[i + 1], input[i]));
        vk_x = Pairing.addition(vk_x, vk.IC[0]);
        if (!Pairing.pairingProd2(proof.A, vk.A, Pairing.negate(proof.A_p), Pairing.P2())) return 1;
        if (!Pairing.pairingProd2(vk.B, proof.B, Pairing.negate(proof.B_p), Pairing.P2())) return 2;
        if (!Pairing.pairingProd2(proof.C, vk.C, Pairing.negate(proof.C_p), Pairing.P2())) return 3;
        if (!Pairing.pairingProd3(
            proof.K, vk.gamma,
            Pairing.negate(Pairing.addition(vk_x, Pairing.addition(proof.A, proof.C))), vk.gammaBeta2,
            Pairing.negate(vk.gammaBeta1), proof.B
        )) return 4;
        if (!Pairing.pairingProd3(
                Pairing.addition(vk_x, proof.A), proof.B,
                Pairing.negate(proof.H), vk.Z,
                Pairing.negate(proof.C), Pairing.P2()
        )) return 5;
        return 0;
    }
    event Verified(string s);
    function verifyTx(
            uint[2] memory  a,
            uint[2] memory  a_p,
            uint[2][2] memory  b,
            uint[2] memory  b_p,
            uint[2] memory  c,
            uint[2] memory  c_p,
            uint[2] memory  h,
            uint[2] memory  k,
            uint[2] memory  input
        ) public returns (bool r) {
        Proof memory proof;
        proof.A = Pairing.G1Point(a[0], a[1]);
        proof.A_p = Pairing.G1Point(a_p[0], a_p[1]);
        proof.B = Pairing.G2Point([b[0][0], b[0][1]], [b[1][0], b[1][1]]);
        proof.B_p = Pairing.G1Point(b_p[0], b_p[1]);
        proof.C = Pairing.G1Point(c[0], c[1]);
        proof.C_p = Pairing.G1Point(c_p[0], c_p[1]);
        proof.H = Pairing.G1Point(h[0], h[1]);
        proof.K = Pairing.G1Point(k[0], k[1]);
        uint[] memory inputValues = new uint[](input.length);
        for(uint i = 0; i < input.length; i++){
            inputValues[i] = input[i];
        }
        if (verify(inputValues, proof) == 0) {
            emit Verified("Transaction successfully verified.");
            return true;
        } else {
            return false;
        }
    }
}