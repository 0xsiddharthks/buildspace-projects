// run with --network localhost flag
import { ethers } from "hardhat";

const main = async () => {
  const [deployer] = await ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log("Deploying contracts with the account: ", deployer.address);
  console.log(
    "Account balance before deployment: ",
    accountBalance.toString(),
    " ETH"
  );
  const waveContractFactory = await ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("contract deployed to: ", waveContract.address);
  console.log("new Account balance: ", accountBalance.toString(), " ETH");
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
