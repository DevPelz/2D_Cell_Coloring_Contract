import { ethers } from "hardhat";

async function main() {
  const board = await ethers.deployContract("Board", []);

  await board.waitForDeployment();

  console.log(`board deployed to ${board.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
