import { ethers } from "hardhat";

async function main() {
  const board = "0x372ae1a6d3991e4140411f3e0fb906b95f1b1015";

  const Iboard = await ethers.getContractAt("IBoard", board);

  console.log("=============getting cell color=============");
  const getColor = await Iboard.getCellColor(4, 3);
  console.log(getColor);

  console.log("==========getting cell color pairs==========");
  const getColorpairs = await Iboard.getColorAtCoordinates(3, 5, 5, 7);
  console.log(getColorpairs);
  console.log("============================================");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
