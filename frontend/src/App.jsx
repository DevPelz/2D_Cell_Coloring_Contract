import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { useContractRead } from "wagmi";
import boardContract from "../contracts/Board.json";
const { VITE_CONTRACT_ADDRESS } = import.meta.env;

export default function App() {
  const { data: getCellColorData } = useContractRead({
    address: VITE_CONTRACT_ADDRESS,
    abi: boardContract.abi,
    functionName: "getCellColor",
    args: [3, 4],
  });

  console.log(getCellColorData);

  return (
    <div className="flex justify-center mt-20">
      <ConnectButton />
    </div>
  );
}
