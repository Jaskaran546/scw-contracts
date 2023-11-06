/* eslint-disable camelcase */
import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";

import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers";
import "hardhat-dependency-compiler";
import { parseUnits } from "ethers/lib/utils";

const privateKeyOwner = process.env.DEPLOYER_CONTRACT_DEPLOYER_PRIVATE_KEY;

dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.17",
        settings: {
          viaIR: true,

          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/e42985dd7f0f467d9218c01fa4757c07",
      // chainId: 97,
      // gasPrice: 20000000000,
      accounts: [
        "f3d1aaea7abad660f00d3e5f39d0680e37196b7f794cafc335f29bd62406838f",
      ],
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      // chainId: 97,
      // gasPrice: 20000000000,
      accounts: [
        "f3d1aaea7abad660f00d3e5f39d0680e37196b7f794cafc335f29bd62406838f",
      ],
    },
    goerli: {
      url: "https://goerli.infura.io/v3/e42985dd7f0f467d9218c01fa4757c07",
      // chainId: 97,
      // gasPrice: 20000000000,
      accounts: [
        "f3d1aaea7abad660f00d3e5f39d0680e37196b7f794cafc335f29bd62406838f",
      ],
    },

    bscTestnet: {
      url: "https://data-seed-prebsc-1-s3.binance.org:8545/",
      // chainId: 97,
      // gasPrice: 20000000000,
      accounts: [
        "f3d1aaea7abad660f00d3e5f39d0680e37196b7f794cafc335f29bd62406838f",
      ],
    },

    // mainnet: {
    //   url: process.env.ETH_RPC || "",
    //   // accounts: [`0x384158242f384bcbb27cbb663fbca37e`]
    //   accounts: [`0x${process.env.PVT_KEY}`]
    // },
    // bsc: {
    //   url: process.env.BSC_RPC || "",
    //   // accounts: [`0x384158242f384bcbb27cbb663fbca37e`]
    //   accounts: [`0x${process.env.PVT_KEY}`]
    // },
    hardhat: {
      allowUnlimitedContractSize: true,
    },
  },
  etherscan: {
    apiKey: process.env.POLYGON_MUMBAI_URL,
    // bsc: process.env.BSC_API_KEY,
    // bscTestnet: 'FUFZFC8P2PFBBTDN3EZ3288I3MPE8M37SY',
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
  },
};

// https://ethereum-sepolia.blockpi.network/v1/rpc/5da0756c67b826416c555a327f1070c0a74ab60e
