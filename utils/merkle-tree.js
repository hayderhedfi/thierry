// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { MerkleTree } = require('merkletreejs')
var SHA256 = require("crypto-js").SHA256;
var list = require('./list').LIST;



async function createTree() {
    const leaves = list.map(x => x.replace("0x", "0x000000000000000000000000"));
    const tree = new MerkleTree(leaves, SHA256, { sortPairs: true });
    const root = tree.getRoot().toString('hex');

    return root;
}

async function getRoot(root) {
    return console.log(`0x${root}`);
}

async function getMerkleProof(walletAddress) {
  const leaf = walletAddress;
  let proof = tree.getHexProof(leaf.replace("0x", "0x000000000000000000000000"));
  return console.log("Proof : ", proof);
}

export { createTree, getRoot, getMerkleProof };
