const { expect } = require("chai");
const { waffle } = require("hardhat");
const { MerkleTree } = require('merkletreejs')
var SHA256 = require("crypto-js").SHA256;

describe("NFT Collection Testing", function() {
    let N7Collection;
    let hardhatCollection;
    let owner;
    let addr1;
    let addrs;
    let list = [];
    let tree;

    async function createTree(list){
      let leaves = list.map(x => x.replace("0x", "0x000000000000000000000000"));
      tree = new MerkleTree(leaves, SHA256, { sortPairs: true });
      let root = tree.getRoot().toString('hex');
      return `0x${root}`;
    }
    
    async function getMerkleProof(walletAddress) {
      const leaf = walletAddress;
      let proof = tree.getHexProof(leaf.replace("0x", "0x000000000000000000000000"));
      return proof;
    }

    // `beforeEach` will run before each test, re-deploying the contract every
    // time. It receives a callback, which can be async.
    beforeEach(async function () {
        // Get the ContractFactory and Signers here.
        N7Collection = await ethers.getContractFactory("N7Collection");
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

        // To deploy our contract, we just have to call Token.deploy() and await
        // for it to be deployed(), which happens once its transaction has been
        // mined.
        hardhatCollection = await N7Collection.deploy("a", "a", "");

        const accounts = await hre.ethers.getSigners();

        for (const account of accounts) {
          list.push(account.address);
        }

        // get root
        let root = createTree(list);

        // set root
        await hardhatCollection.setRoot(root);
    });

    it("Should set the right owner", async function () {
        // Expect receives a value, and wraps it in an Assertion object. These
        // objects have a lot of utility methods to assert values.

        // This test expects the owner variable stored in the contract to be equal
        // to our Signer's owner.
        expect(await hardhatCollection.owner()).to.equal(owner.address);
    });

    it("Should active smart contract", async function() { 
        // setIsActive to true 
        await hardhatCollection.setIsActive(true);
        expect(await hardhatCollection.isActive()).to.equal(true);
    });

    it("User can participate to presale and mint", async function() {            
        await hardhatCollection.connect(owner).setIsActive(true);
        let proof = await getMerkleProof(addr1.address);
        await hardhatCollection.connect(addr1).mintNFT(5, proof, {value: ethers.utils.parseEther("0.5")});
        expect(await hardhatCollection.balanceOf(addr1.address)).to.equal(5);
    });

    it("Owner can mint for a participant", async function() {            
      await hardhatCollection.connect(owner).setIsActive(true);
      let proof = await getMerkleProof(addr1.address);

      await hardhatCollection.connect(owner).mintNFTByOwner(5, addr1.address, proof, {value: ethers.utils.parseEther("0.5")});
      expect(await hardhatCollection.balanceOf(addr1.address)).to.equal(5);
    });

    it("Owner should be able to direct mint for giveaway purposes", async function() {
        let totalSupplyBefore = await hardhatCollection.totalSupply();

        await hardhatCollection.mintByOwner(addr1.address, 1000);
        expect(await hardhatCollection.ownerOf(1000)).to.equal(addr1.address);

        let totalSupplyAfter = await hardhatCollection.totalSupply();

        expect(totalSupplyBefore.add(1)).to.equal(totalSupplyAfter);
    });
    
    it("Release payment to contributors", async function() {
        // setIsActive to true 
        await hardhatCollection.setIsActive(true)
        expect(await hardhatCollection.isActive()).to.equal(true);

        // mint public sale  
        let proof = await getMerkleProof(addr2.address);
        await hardhatCollection.connect(addr2).mintNFT(5, proof, {value: ethers.utils.parseEther("0.5")});
        expect(await hardhatCollection.balanceOf(addr2.address)).to.equal(5);

        // 0.5 eth received 
        expect(await ethers.provider.getBalance(hardhatCollection.address)).to.equal(ethers.utils.parseEther("0.5"));
        
        // check balance of the first contributor
        let balanceBefore = await ethers.provider.getBalance(addr1.address);

        // get share part
        await hardhatCollection.release(addr1.address);
        let balanceAfter = await ethers.provider.getBalance(addr1.address);

        expect(balanceAfter).to.be.gt(balanceBefore);
    });

    it("Should revert once payment released", async function() {
        // setIsActive to true 
        await hardhatCollection.setIsActive(true)
        expect(await hardhatCollection.isActive()).to.equal(true);

        // mint public sale  
        let proof = await getMerkleProof(addr2.address);
        await hardhatCollection.connect(addr2).mintNFT(5, proof, {value: ethers.utils.parseEther("0.5")});
        expect(await hardhatCollection.balanceOf(addr2.address)).to.equal(5);

        // 0.5 eth received 
        expect(await ethers.provider.getBalance(hardhatCollection.address)).to.equal(ethers.utils.parseEther("0.5"));

        // get share part
        await hardhatCollection.release(addr1.address);

        await expect(
            hardhatCollection.release(addr1.address)
        ).to.be.revertedWith("PaymentSplitter: account is not due payment");
    });

    it("Release payment to contributor, twice if it's possible", async function() {
        // setIsActive to true 
        await hardhatCollection.setIsActive(true)
        expect(await hardhatCollection.isActive()).to.equal(true);

        // mint public sale from addr2
        let proof = await getMerkleProof(addr2.address);
        await hardhatCollection.connect(addr2).mintNFT(5, proof, {value: ethers.utils.parseEther("0.5")});

        // 0.5 eth received 
        expect(await ethers.provider.getBalance(hardhatCollection.address)).to.equal(ethers.utils.parseEther("0.5"));

        // get share part
        await hardhatCollection.release(addr1.address);

        // mint public sale  from addr1
        proof = await getMerkleProof(addr1.address);
        await hardhatCollection.connect(addr1).mintNFT(5, proof, {value: ethers.utils.parseEther("0.5")});

        // get share part
        await hardhatCollection.release(addr1.address);
    });
});

