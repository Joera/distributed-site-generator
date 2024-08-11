require("@nomicfoundation/hardhat-toolbox");
require("@xyrusworx/hardhat-solidity-json");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "arbsepolia",
  networks: {
    arbsepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
    ipc: {
      url: "http://localhost:8545",
      accounts: ["d8540985d3f8b0772ce5ac1004393e2d2ac3a902c1b6115a620aa70f27b7592c"]
    }
  },
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000
      }
    }
  },
  etherscan: {
    apiKey: {
      arbitrumSepolia: 'RPG6FJDHR6FM8Q1FDU8CQCT2VKXXU8R98V'
    }
  }
};
