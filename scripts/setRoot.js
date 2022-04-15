// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { MerkleTree } = require('merkletreejs');
var SHA256 = require("crypto-js").SHA256;
let list = require("./list").LIST;
const leaves = list.map(x => x.replace("0x", "0x000000000000000000000000"));
const tree = new MerkleTree(leaves, SHA256, { sortPairs: true });

async function getRoot(root) {
  return console.log(`0x${root}`);
}

async function getMerkleProof(walletAddress) {
  const leaf = walletAddress;
  let proof = tree.getHexProof(leaf.replace("0x", "0x000000000000000000000000"));
  return console.log("Proof : ", proof);
}

async function main() {
  const root = tree.getRoot().toString('hex');
  await getRoot(root);
  // exemple get proof
  await getMerkleProof("0x9E9aC39d118a343E858C59a501dD48434fDd6109");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
