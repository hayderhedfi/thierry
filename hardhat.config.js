require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require('hardhat-contract-sizer');
require("hardhat-gas-reporter");
require("hardhat-prettier");
const PRIVATE_KEY = process.env.PRIVATE_KEY;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    // ropsten: {
    //   url: `https://ropsten.infura.io/v3/${process.env.PROJECT_ID}`,
    //   accounts: {
    //     mnemonic: process.env.MNEMONIC
    //   },
    //   chainId: 3,
    //   live: true,
    //   saveDeployments: true,
    // },
    // rinkeby: {
    //   url: `https://rinkeby.infura.io/v3/${process.env.PROJECT_ID}`,
    //   accounts: {
    //     mnemonic: process.env.MNEMONIC
    //   },
    //   chainId: 4,
    //   live: true,
    //   saveDeployments: true,
    // },
    // bsc: {
    //   url: "https://data-seed-prebsc-1-s1.binance.org:8545",
    //   chainId: 97,
    //   accounts: {
    //     mnemonic: process.env.MNEMONIC
    //   },
    //   live: true,
    //   saveDeployments: true,
    // },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.MUMBAI_API}`,
      accounts: [PRIVATE_KEY]
    }
  },
  solidity: {
    version: "0.8.11",
    settings: {
      metadata: {
        // Not including the metadata hash
        // https://github.com/paulrberg/solidity-template/issues/31
        bytecodeHash: "none",
      },
      // Disable the optimizer when debugging
      // https://hardhat.org/hardhat-network/#solidity-optimizer-support
      optimizer: {
        enabled: true,
        runs: 2000,
      },
    },
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
    allowUnlimitedContractSize : true,
  },
  gasReporter: {
    currency: 'EUR',
    gasPrice: 21
  },
  etherscan: {
    // Your API key for Etherscan
    apiKey: {
      // ethereum 
      mainnet: process.env.ETHERSCAN_MAINNET,
      ropsten: process.env.ETHERSCAN_ROPSTEN,
      rinkeby: process.env.ETHERSCAN_RINKEBY,
 
      // binance smart chain
      bsc: process.env.BSCSCAN_MAINNET,
      bscTestnet: process.env.BSCSCAN_TESTNET,

      // polygon
      polygon: process.env.POLYGONSCAN_MAINNET,
      polygonMumbai: process.env.POLYGONSCAN_MUMBAI,
    }
  },
  mocha: {
    timeout: "1000000"
  },
  docgen: {
    path: './docs',
    clear: true,
    runOnCompile: true,
  }
};
