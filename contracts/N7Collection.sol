// SPDX-License-Identifier: MIT

pragma solidity 0.8.11;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
//Ownable is needed to setup sales royalties on Open Sea
//if you are the owner of the contract you can configure sales Royalties in the Open Sea website
import "@openzeppelin/contracts/access/Ownable.sol";
import "./N7PaymentSplitter.sol";

contract N7Collection is ERC721Enumerable, N7PaymentSplitter, Ownable {
    using Strings for uint256;

    string private baseURI;
    string private blindURI;

    uint256 public constant  BUY_LIMIT_PER_TX = 777;
    uint256 private constant MAX_NFT = 7777; // 77 giveway 

    uint256 public NFTPrice = 0.1 ether;   

    bool public reveal;
    bool public isActive;

    bytes32 public root;
    mapping(address => uint256) private nftClaimed;
    uint256 public giveawayCount;

    address[] private contributors = [0x1aC471f56404C4FE49c378b5b9BC63fB689944b9,
                                      0x70997970C51812dc3A010C7d01b50e0d17dc79C8
                                     ];
    uint256[] private sharesContributors = [9500, 500];

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _blindURI
    ) ERC721(_name, _symbol) N7PaymentSplitter(contributors, sharesContributors){
        blindURI = _blindURI;
    }

    /*
    * Function to reveal all NFTs
    */
    function revealNow() 
        external 
        onlyOwner 
    {
        reveal = true;
    }

    /*
    * Function setIsActive to activate/desactivate the smart contract
    */
    function setIsActive(
        bool _isActive
    ) 
        external 
        onlyOwner 
    {
        isActive = _isActive;
    }
    
    /*
    * Function to set Base and Blind URI 
    */
    function setURIs(
        string memory _blindURI, 
        string memory _URI
    ) 
        external 
        onlyOwner 
    {
        blindURI = _blindURI;
        baseURI = _URI;
    }
    
    /*
    * Function to mint new NFTs by owner for whom purchased with card
    */
    function mintNFTByOwner(
        uint256 _numOfTokens,
        address _buyer,
        bytes32[] memory _proof
    ) 
        external 
        payable
        onlyOwner
    {
    
        require(isActive, "Nefty : Contract is not active");
        require(verify(_proof, bytes32(uint256(uint160(_buyer)))), "Nefty : Not whitelisted");
        require(_numOfTokens <= BUY_LIMIT_PER_TX, "Nefty : Cannot mint above limit");
        require(nftClaimed[_buyer] <= BUY_LIMIT_PER_TX, "Nefty : Cannot mint above limit for one address");
        require((totalSupply() + _numOfTokens) - giveawayCount <= MAX_NFT, "Nefty : Purchase would exceed max public supply of NFTs");
        
        for(uint i = 0; i < _numOfTokens; i++) {
            _safeMint(_buyer, totalSupply() - giveawayCount);
        }
        nftClaimed[_buyer] += _numOfTokens;
    }
    
    /*
    * Function to mint new NFTs 
    * It is payable. Amount is calculated as per (NFTPrice.mul(_numOfTokens))
    */ 
    function mintNFT(
        uint256 _numOfTokens,
        bytes32[] memory _proof
    ) 
        external 
        payable
    {
        require(isActive, "Nefty : Contract is not active");
        require(verify(_proof, bytes32(uint256(uint160(msg.sender)))), "Nefty : Not whitelisted");
        require(_numOfTokens <= BUY_LIMIT_PER_TX, "Nefty : Cannot mint above limit");
        require(nftClaimed[msg.sender] <= BUY_LIMIT_PER_TX, "Nefty : Cannot mint above limit for one address");
        require((totalSupply() + _numOfTokens) - giveawayCount <= MAX_NFT, "Nefty : Purchase would exceed max public supply of NFTs");
        require(msg.value >= NFTPrice * _numOfTokens, "Nefty : Ether value sent is not correct");

        for (uint256 i = 0; i < _numOfTokens; i++) {
            _safeMint(msg.sender, totalSupply() - giveawayCount);
        }
        nftClaimed[msg.sender] += _numOfTokens;
    }
    
    /*
    * Function to mint all NFTs for giveaway and partnerships
    */
    function mintByOwner(
        address _to, 
        uint256 _tokenId
    ) 
        public 
        onlyOwner
    {
        require(_tokenId < MAX_NFT, "Nefty : Tokens number to mint cannot exceed number of MAX tokens");
        _safeMint(_to, _tokenId);
        giveawayCount = giveawayCount + 1;
    }
    
    /*
    * Function to mint all NFTs for giveaway and partnerships
    */
    function mintMultipleByOwner(
        address[] memory _to, 
        uint256[] memory _tokenId
    ) 
        public 
        onlyOwner
    {
        require(_to.length == _tokenId.length, "Nefty : Should have same length");
        for(uint256 i = 0; i < _to.length; i++){
            require(_tokenId[i] < MAX_NFT, "Nefty : Tokens number to mint cannot exceed number of MAX tokens");
            _safeMint(_to[i], _tokenId[i]);
            giveawayCount = giveawayCount + 1;
        }
    }
    
    /*
    * Function to get token URI of given token ID
    * URI will be blank untill totalSupply reaches MAX_NFT_PUBLIC
    */
    function tokenURI(
        uint256 _tokenId
    ) 
        public 
        view 
        virtual 
        override 
        returns (string memory) 
    {
        require(_exists(_tokenId), "Nefty : URI query for nonexistent token");
        if (!reveal) {
            return string(abi.encodePacked(blindURI, Strings.toString(_tokenId),".json"));
        } else {
            return string(abi.encodePacked(baseURI, Strings.toString(_tokenId),".json"));
        }
    }

    // Standard functions to be overridden 
    function _beforeTokenTransfer(
        address _from, 
        address _to, 
        uint256 _tokenId
    ) 
        internal 
        override(ERC721Enumerable) 
    {
        super._beforeTokenTransfer(_from, _to, _tokenId);
    }

    function setRoot(uint256 _root) onlyOwner() public {
        root = bytes32(_root);
    }

    function verify(bytes32[] memory proof, bytes32 leaf) public view returns (bool) {
        bytes32 computedHash = leaf;

        for (uint256 i = 0; i < proof.length; i++) {
            bytes32 proofElement = proof[i];
            
            if (computedHash <= proofElement) {
                // Hash(current computed hash + current element of the proof)
                computedHash = sha256(abi.encodePacked(computedHash, proofElement));
            } else {
                // Hash(current element of the proof + current computed hash)
                computedHash = sha256(abi.encodePacked(proofElement, computedHash));
            }
        }

        // Check if the computed hash (root) is equal to the provided root
        return computedHash == root;
    }
}