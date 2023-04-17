import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_QUICKNODE_KEY as string,
      accounts: [process.env.PRIVATE_KEY as string],
    },
    mainnet: {
      url: process.env.MAINNET_QUICKNODE_KEY as string,
      accounts: [process.env.PRIVATE_KEY as string],
    },
  },
};

task("accounts", "prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

export default config;
