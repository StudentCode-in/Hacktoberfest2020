# Udacity Blockchain Capstone

This project is about managing Real Estate Marketplace in Etherium Blockchain.Each property is represented by ERC721 Token.  before you can mint a token you need to verify that you are the owner of the property.zk-SNARKs is used to create a verification system which can prove you have title to the property without revealing that specific information on the property.Once the token has been verified you will place it on a blockchain market place (OpenSea) for others to purchase.


# Install

To install, download or clone this repo, then:

npm install
npm install --save truffle-hdwallet-provider

Start Ganache like below .
ganache-cli -a 40 -m "before steel list survey awkward cement avocado execute napkin neglect mutual cost"

In a separate terminal window,from inside the directory eth-contracts/ Compile smart contracts:
cd eth-contracts/ 
truffle compile


# Testing
To run truffle tests: In directory eth-contracts/
cd eth-contracts/ 

truffle test test/TestERC721Mintable.js
truffle test test/TestSquareVerifier.js
truffle test test/TestSolnSquareVerifier.js

For all tests:
truffle test (All 11 tests should pass. For single file tests)

# Rinkeby Deployment info
1 Login/create infura account to obtain Rinkeby endpoint
Update the truffle-config.js file to include the Rinkeby network
truffle compile
truffle migrate --network rinkeby --reset

## Rinkeby Deployment output:

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 0x989680


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        5724850
   > block timestamp:     1578012114
   > account:             0x1D4396D3DfdFFFB57e2Ae580f175E7DFCf08759A
   > balance:             3.837823335
   > gas used:            246393
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.000492786 ETH

   -------------------------------------
   > Total cost:         0.000492786 ETH


2_deploy_contracts.js
=====================

   Deploying 'ERC721Mintable'
   --------------------------
   > block number:        5724852
   > block timestamp:     1578012140
   > account:             0x1D4396D3DfdFFFB57e2Ae580f175E7DFCf08759A
   > balance:             3.830460737
   > gas used:            3654276
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.007308552 ETH


   Deploying 'Verifier'
   --------------------
   > block number:        5724853
   > block timestamp:     1578012152
   > account:             0x1D4396D3DfdFFFB57e2Ae580f175E7DFCf08759A
   > balance:             3.827038841
   > gas used:            1710948
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.003421896 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > block number:        5724854
   > block timestamp:     1578012176
   > account:             0x1D4396D3DfdFFFB57e2Ae580f175E7DFCf08759A
   > balance:             3.817502673
   > gas used:            4768084
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.009536168 ETH

   -------------------------------------
   > Total cost:         0.020266616 ETH


Summary
=======
> Total deployments:   4
> Final cost:          0.020759402 ETH


Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 0x989680


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x56b7988cd6d9ed89a3951aab0bb710f1af7c1833890313fffb1455a49f5206eb
   > Blocks: 0            Seconds: 5
   > contract address:    0x3EDd7E5AbD1D0db8cd0A2bCF4DbA65c3B51FcC10
   > block number:        5724855
   > block timestamp:     1578012203
   > account:             0x1D4396D3DfdFFFB57e2Ae580f175E7DFCf08759A
   > balance:             3.833850021
   > gas used:            223305
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0044661 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0044661 ETH


2_deploy_contracts.js
=====================

   Deploying 'ERC721Mintable'
   --------------------------
   > transaction hash:    0x8f8e7e16a357e596b78b9d94a204a05dd13516302926859659f18e764603a921
   > Blocks: 1            Seconds: 9
   > contract address:    0x39A89f362C9A9C8C234D9C519375469Ac12Ca495
   > block number:        5724857
   > block timestamp:     1578012233
   > account:             0x1D4396D3DfdFFFB57e2Ae580f175E7DFCf08759A
   > balance:             3.770496921
   > gas used:            3125292
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.06250584 ETH


   Deploying 'Verifier'
   --------------------
   > transaction hash:    0x5fc9f6bb97cb618cb9d3a112f327edd77867025cce3d4ec7ba36955679a3bdde
   > Blocks: 0            Seconds: 12
   > contract address:    0x471711d1B1d21785CeC5C50Cb5c4d547B34E37b9
   > block number:        5724858
   > block timestamp:     1578012248
   > account:             0x1D4396D3DfdFFFB57e2Ae580f175E7DFCf08759A
   > balance:             3.742646921
   > gas used:            1392500
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.02785 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x3473e06d9dea5ede35e5322028943ddacddfe274975e9794df5c393010dfafe5
   > Blocks: 0            Seconds: 12
   > contract address:    0x24B05AdCf84C2Dae205D379993674Fab201e416D
   > block number:        5724860
   > block timestamp:     1578012278
   > account:             0x1D4396D3DfdFFFB57e2Ae580f175E7DFCf08759A
   > balance:             3.661871001
   > gas used:            4038796
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.08077592 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.17113176 ETH


Summary
=======
> Total deployments:   4
> Final cost:          0.17559786 ETH

## Contract Adress-SolnSquareVerifier 0x24B05AdCf84C2Dae205D379993674Fab201e416D

## Contract address-Verifier 0x471711d1B1d21785CeC5C50Cb5c4d547B34E37b9

## contract address-ERC721Mintable 0x39A89f362C9A9C8C234D9C519375469Ac12Ca495

## Account address 0x1D4396D3DfdFFFB57e2Ae580f175E7DFCf08759A

## Contract ABI
[{"constant":true,"inputs":[{"name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"a","type":"uint256[2]"},{"name":"a_p","type":"uint256[2]"},{"name":"b","type":"uint256[2][2]"},{"name":"b_p","type":"uint256[2]"},{"name":"c","type":"uint256[2]"},{"name":"c_p","type":"uint256[2]"},{"name":"h","type":"uint256[2]"},{"name":"k","type":"uint256[2]"},{"name":"input","type":"uint256[2]"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"addSolution","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_myid","type":"bytes32"},{"name":"_result","type":"string"}],"name":"__callback","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_myid","type":"bytes32"},{"name":"_result","type":"string"},{"name":"_proof","type":"bytes"}],"name":"__callback","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"key","type":"bytes32"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"mintVerified","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"baseTokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"verifierAddress","type":"address"},{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"baseTokenURI","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"}],"name":"SolutionAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"approved","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"operator","type":"address"},{"indexed":false,"name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]


## Contract address on rinkeby.etherscan: https://rinkeby.etherscan.io/address/0x24b05adcf84c2dae205d379993674fab201e416d 
## Minting tokens
https://www.myetherwallet.com/interface/interact-with-contract

## OpenSea marketplace
https://rinkeby.opensea.io/assets/0x24b05adcf84c2dae205d379993674fab201e416d/13
https://rinkeby.opensea.io/assets/0x24b05adcf84c2dae205d379993674fab201e416d/11
https://rinkeby.opensea.io/assets/0x24b05adcf84c2dae205d379993674fab201e416d/10
https://rinkeby.opensea.io/assets/0x24b05adcf84c2dae205d379993674fab201e416d/53
https://rinkeby.opensea.io/assets/0x24b05adcf84c2dae205d379993674fab201e416d/51

## Token Storefront on Opensea
https://rinkeby.opensea.io/assets/real-estate-marketplace-v12

## transactions on market place
https://rinkeby.etherscan.io/tx/0xa7749f7dd6f9635ad8785d2546db45f64844f9fdf594455f424778dbc9142f8e
https://rinkeby.etherscan.io/tx/0xf3ebd25785289ad8f7077015a7a6d6de4b6cdca54bb62a8997ad08b708d9cc9c
https://rinkeby.etherscan.io/tx/0x1a1ed17ca5226306f6451fdaedb391a8939ecf764c3724a0c4bb253317e58fad
https://rinkeby.etherscan.io/tx/0x82006abef27f0bd6d95cb24dae9ca6ad57db283c146290a090fefed0a0b25a39
https://rinkeby.etherscan.io/tx/0xb241a303612a91618c3c9d4d1b0ef43ce71d5e6e3739dbaac79dbcebb47ca85c


# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
