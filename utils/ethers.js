// import { ethers } from 'ethers'
// import { shuffled } from 'ethers/lib/utils';
// import N7Collection from '../artifacts/contracts/N7Collection.sol/N7Collection.json';
// // import {getMerkleProof} from './merkle-tree'

// export const OPENSEA_LINK = "https://opensea.io/collection/neftyseven";
// export const SUMSUB_LINK = "https://in.sumsub.com/idensic/l/#/uni_0VsQWnlfSt4kdZP0";
// export const NAME_APP = "NEFTY SEVEN";

// const CONTRACT_ABI = N7Collection.abi;
// export const CONTRACT_ADDRESS = '0x23807F9E16F77534124ad405791c66D4E023C4b0';
// export const POLYGON_ID = "0x89";
// export const MUMBAI_ID = "0x13881";

// export const MAX_AMOUNT_PER_MINT = 777;
// export const NFT_PRICE_MATIC = 28;
// export const NFT_PRICE_EURO = 35;
// export const NFT_PRICE_MATIC_DEV = 0.15;

// export const NFT_PRICE_MATIC_COLLEC_II = 190; 

// export const MAX_NUMBER_NFT = 7777;


// export const description_nft = "Achat de NFTs";


// // On stripe : 3000 cents for 1 NFT = 30€
// // So for 3000 cents we have to divide 30€ by 3000 to have 1 NFT
// export const ratio_for_stripe = 3000;

// export const WALLET_RECIPIENT = "0x37A279FB203B8F5dB514fD7AE77f7C4618286300";

// // for read-only
// export const connectToContract = async () => {
//   const provider = new ethers.providers.Web3Provider(window.ethereum);
//   const contract = new ethers.Contract(
//     CONTRACT_ADDRESS,
//     CONTRACT_ABI,
//     provider
//   );
//   return contract;
// }

// // for read/write
// export const connectToContract_RW = async () => {
//   const provider = new ethers.providers.Web3Provider(window.ethereum);
//   const signer = provider.getSigner();
//   const contract = new ethers.Contract(
//     CONTRACT_ADDRESS,
//     CONTRACT_ABI,
//     signer
//   );
//   console.log("HEEEEERE : " + contract)
//   return contract;
// }

// export const getSigner = async () => {
//   const provider = new ethers.providers.Web3Provider(window.ethereum);
//   const signer = provider.getSigner();
//   console.log('signer: ', signer);
//   return signer;
// }

// // export const getRemainingToken = async () => {
// //   const contract = await connectToContract_RW();
// //   try {
// //     const remainingNfts = await contract.getRemaining();
// //     console.log("Remaining NFTS", parseInt(remainingNfts, 10));
// //   } catch (error) {
// //     console.log("Error", error);
// //   }
// // }

// // Logic where we randomly choose NFTs according to amount
// export const MintNFT = async (amountToMint, cbError) => {
//   console.log("MintNFT")
//   const contract = await connectToContract_RW();
//   const AMOUNT_TOTAL = amountToMint || 20;
//   const NB_OF_NFT = process.env.NB_OF_NFT || 4;
//   const priceToPay = String(amountToMint * NFT_PRICE_MATIC_DEV);

//   console.log("NB", NB_OF_NFT);
//   const arrayOfAmount = [];

//   let nft_left = AMOUNT_TOTAL;
//   try {
//     // const contract = await connectToContract_RW();
//     // const mint = await contract.mintNFT(amountToMint, { value: ethers.utils.parseEther(priceToPay) });
//     console.log("11111");
//     const provider = new ethers.providers.Web3Provider(window.ethereum);

//     const signer = provider.getSigner();
//     const myAddress = await signer.getAddress()
//     console.log("my address = " + myAddress)
//     // const proof = getMerkleProof(myAddress)
//     console.log("22222222");
//     const mint = await contract.mintNFT(amountToMint, proof, { value: ethers.utils.parseEther(priceToPay) });
//     console.log("MintNFT", mint);
//   } catch (error) {
//     cbError("Voir console")
//     console.log("Error", error);
//   }
//   while (nft_left > 0) {
//     const rand_amount = Math.floor(Math.random() * AMOUNT_TOTAL / 2);

//     // ARRAY LENGTH MUST BE LENGTH of NUMBER OF NFTS
//     // break out if there is 1 index left and fill it with remaining nft
//     // or if array is gonna be longer than the number of NFT
//     if (rand_amount > nft_left || arrayOfAmount.length >= NB_OF_NFT - 1) {
//       arrayOfAmount.push(nft_left);
//       break;
//     } else {
//       nft_left -= rand_amount;
//     }
//     arrayOfAmount.push(rand_amount);
//   }

//   // fill all remaining index with 0 to achieve the length
//   while (arrayOfAmount.length < NB_OF_NFT) {
//     arrayOfAmount.push(0);
//   }

//   // finalArray
//   const fA = shuffled(arrayOfAmount);
//   console.log("Array", fA);
//   console.log("amount : " + amountToMint);



// }

// // Mumbai - 0x13881
// // Polygon - 0x89
// export const getChainNetwork = async (account) => {
//   if (account) {
//     const windowChain = await window.ethereum.chainId;
//     return windowChain;
//   }
//   return "No account";
// }

// export const SwitchNetwork = async (account) => {
//   if (account) {
//     await window.ethereum.request({
//       method: "wallet_addEthereumChain",
//       params: [{
//         chainId: "0x89",
//         rpcUrls: ["https://rpc-mainnet.matic.network/"],
//         chainName: "Matic Mainnet",
//         nativeCurrency: {
//           name: "MATIC",
//           symbol: "MATIC",
//           decimals: 18
//         },
//         blockExplorerUrls: ["https://polygonscan.com/"]
//       }]
//     });
//     window.location.reload();
//   }
// }

// export const getAccount = async (cb, cbDispatch) => {
//   try {
//     const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//     const account = handleAccountsChanged(accounts)
//     // utils.getAddress to return mixCase and not only lowercase..
//     // return utils.getAddress(account);
//     if (cb) { cb(sliceAcc(account)); }
//     if (cbDispatch) { cbDispatch({ type: "SET_ACCOUNT", payload: account, }); }
//     return account;
//   } catch (error) {
//     if (error.code === 4001) {
//       alert('Please connect to metamask to continue')
//     } else {
//       console.error(error)
//     }
//   }
// }

// export const sliceAcc = (acc) => {
//   let slicedAcc = `${acc.slice(0, 8)}...${acc.slice(-7, -1)}`;
//   return slicedAcc;
// }

// const handleAccountsChanged = (accounts) => {
//   if (accounts.length === 0) {
//     console.log("Please connect to metamask")
//   } else {
//     window.ethereum.on("accountsChanged", () => { window.location.reload() });
//     return accounts[0];
//   }
// }

// export const toWei = nb => {
//   return ethers.utils.parseEther(nb);
// }