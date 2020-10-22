pragma solidity >=0.4.21 <0.6.0;
import './ERC721Mintable.sol';

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is ERC721Mintable {

    Verifier verifierContract;
// TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint[2]  a;
        uint[2]  a_p;
        uint[2][2]  b;
        uint[2]  b_p;
        uint[2]  c;
        uint[2]  c_p;
        uint[2]  h;
        uint[2]  k;
        uint[2]  input;
        address to;
        uint256 tokenId;
    }

// TODO define an array of the above struct
    mapping(bytes32 => Solution) solutions;

// TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => bool) solutionsExist;

// TODO Create an event to emit when a solution is added
    event SolutionAdded(address owner);
    constructor(address verifierAddress, string memory name, string memory symbol, string memory baseTokenURI )
        ERC721Mintable(name, symbol, baseTokenURI) public
    {
        verifierContract = Verifier(verifierAddress);
    }

// TODO Create a function to add the solutions to the array and emit the event
    function addSolution(uint[2] memory a, uint[2] memory a_p, uint[2][2] memory b, uint[2] memory b_p, uint[2] memory c, uint[2] memory c_p,
                         uint[2] memory h, uint[2] memory k, uint[2] memory input, address to, uint256 tokenId) public returns (bool)
    {
        Solution memory Sol = Solution(a, a_p, b, b_p, c, c_p, h, k, input,to,tokenId);
        bytes32 key = keccak256(abi.encodePacked(a,a_p,b,b_p,c,c_p,h,k,input,to,tokenId));
        solutions[key] = Sol;
        emit SolutionAdded(msg.sender);
        bool check = mintVerified(key,to,tokenId);
        return check;
    }

// TODO Create a function to mint new NFT only after the solution has been verified
    function mintVerified( bytes32 key, address to, uint256 tokenId) public returns (bool)
    {
        bool Completed = false;
        bool check = solutionsExist[key];
        Solution memory sol = solutions[key];
        if(check != true)
        {
          bool verification = verifierContract.verifyTx(sol.a,sol.a_p,sol.b,sol.b_p,sol.c,sol.c_p,sol.h,sol.k,sol.input);
          if(verification == true)
            {
            solutionsExist[key] = true;
            super.mint(to,tokenId);
            Completed = true;
            }
        }
        return Completed;
    }
}
contract Verifier
{
    function verifyTx(uint[2] memory  a, uint[2] memory  a_p, uint[2][2] memory  b, uint[2] memory  b_p, uint[2] memory  c, uint[2] memory  c_p,
                      uint[2] memory  h, uint[2] memory  k, uint[2] memory  input ) public returns (bool r);
}