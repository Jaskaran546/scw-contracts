// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
import {
  BigNumberish,
  ContractReceipt,
  ContractTransaction,
  Wallet,
  utils,
  BigNumber,
} from "ethers";
import { ethers } from "hardhat";
import { MockPriceFeed__factory } from "../typechain";

// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled

  const ethersSigner = await ethers.getSigners();

  const deployer = ethersSigner[0];

  // const BiconomyTokenPaymaster = await ethers.getContractFactory("BiconomyTokenPaymaster");
  // const tokenPaymaster = await BiconomyTokenPaymaster.deploy("0x1671fc001505af8433B259a60dc2638ae6DaBf0b", "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789", "0x1671fc001505af8433B259a60dc2638ae6DaBf0b");
  // console.log(`Deployed Token Paymaster at ${tokenPaymaster.address}`)

  // const MockPriceFeed = await ethers.getContractFactory("MockPriceFeed");
  // const mockpriceFeed = await MockPriceFeed.deploy()
  // console.log(`Deployed MOck price feed at ${mockpriceFeed.address}`);
  // const usdcMaticPriceFeedMock = await new MockPriceFeed__factory(
  //     deployer
  // ).deploy();

  //   const EcdsaOwnershipRegistryModule = await ethers.getContractFactory("EcdsaOwnershipRegistryModule");
  // const ecdsa = await EcdsaOwnershipRegistryModule.deploy()
  // console.log(`Deployed MOck price feed at ${ecdsa.address}`);

  // const priceFeedUsdc = await ethers.getContractAt(
  //     "FeedInterface",
  //     "0xE5C36ce2b4f2b0Ef196eF532Cc0287a65B26e607"
  //     // usdcMaticPriceFeedMock.address
  // );
  // const priceFeedTxUsdc: any =
  //     await priceFeedUsdc.populateTransaction.getThePrice();
  // console.log('priceFeedUsdc :>> ', priceFeedTxUsdc);

  // const SmartAccountFactory = await ethers.getContractFactory("SmartAccountFactory");
  // const scwFactory = await SmartAccountFactory.deploy("0x49a702d3dCF8691762FA4c275d3F4Fc3d4057E08","0x1671fc001505af8433B259a60dc2638ae6DaBf0b")
  // console.log(`Deployed scwFactory at ${scwFactory.address}`);

  // const VerifyingSingletonPaymaster = await ethers.getContractFactory("VerifyingSingletonPaymaster");
  // const verifyingPaymaster = await VerifyingSingletonPaymaster.deploy("0x1671fc001505af8433B259a60dc2638ae6DaBf0b","0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789","0x1671fc001505af8433B259a60dc2638ae6DaBf0b")
  // console.log(`Deployed verifyingPaymaster at ${verifyingPaymaster.address}`);

  await hre.run("verify:verify", {
    // Deployed contract TokenFactory proxy
    address: "0xaF98e18C2e8Dd926d2FeeCB1Ded688aae0f660A8",
    constructorArguments: [
      "0x1671fc001505af8433B259a60dc2638ae6DaBf0b",
      "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
      "0x1671fc001505af8433B259a60dc2638ae6DaBf0b",
    ],
    // Path of your main contract.
    contract:
      "contracts/smart-account/paymasters/verifying/singleton/VerifyingSingletonPaymaster.sol:VerifyingSingletonPaymaster",
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
