const hre = require("hardhat");
import { createTree, getRoot } from '../utils/merkle-tree';


async function main() {

  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const Nefty = await hre.ethers.getContractFactory("N7Collection");
  const instance = await Nefty.deploy(
    "N7",
    "N7",
    "https://ipfs.io/ipfs/QmRPBVqkSNoH4efukAiEHk38LEeaoNAMhQHeV29zYings1" 
  );

  await instance.deployed();
  console.log("Contract deployed to:", instance.address);
  
  // Create merkle tree 
  const root = createTree();
  const rootToSet = getRoot(root);

  await instance.setRoot(rootToSet); 

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
