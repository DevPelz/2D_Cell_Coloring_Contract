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
// 0x372ae1a6d3991e4140411f3e0fb906b95f1b1015;
