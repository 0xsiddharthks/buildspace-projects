import { ethers } from "hardhat";

const main = async () => {
  const [owner, randomPerson] = await ethers.getSigners();

  // get compiled contract artifacts from hardhat
  // artifacts = { abi, bytecode, address, deployTransaction, deployed()}
  const waveContractFactory = await ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("contract deployed to: ", waveContract.address);
  console.log("contract deployed by: ", owner.address);

  // directly returns since function is view
  await waveContract.getTotalWaves();

  // directly transaction which needs to be mined
  const waveTxn = await waveContract.wave();
  // stops execution until transaction is mined
  waveTxn.wait();
  waveContract.getTotalWaves();

  const randomPersonContractConnection = await waveContract.connect(
    randomPerson
  );
  await randomPersonContractConnection.wave();

  await randomPersonContractConnection.getTotalWaves();
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
