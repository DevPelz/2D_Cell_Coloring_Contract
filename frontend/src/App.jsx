import boardContract from "../contracts/Board.json";
// const { VITE_CONTRACT_ADDRESS } = import.meta.env;

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import "@rainbow-me/rainbowkit/styles.css";
import "./assets/styles.css";
import { useState, useRef, useEffect } from "react";
import { useContractReads } from "wagmi";

export function App() {
  const { isConnected } = useAccount();
  const xInputField = useRef(null);
  const yInputField = useRef(null);
  const [coord, setCoord] = useState({ x: 1, y: 1 });

  const { data, isError, isLoading } = useContractReads({
    contracts: [
      {
        address: "0x372aE1a6D3991E4140411F3E0FB906B95F1B1015",
        abi: boardContract.abi,
        functionName: "getCellColor",
        args: [coord.x - 1, coord.y - 1],
      },
    ],
  });

  let cellColor = "white";
  let cellTextColor = "black";
  let boardResult = data ? data[0]?.result : 1;
  useEffect(() => {
    if (boardResult === "black") {
      cellTextColor = "white";
    } else if (boardResult === "red") {
      cellTextColor = "white";
    }

    if (document.getElementById(coord.x + "" + coord.y) != undefined) {
      document.getElementById(coord.x + "" + coord.y).style.backgroundColor =
        boardResult;
      document.getElementById(coord.x + "" + coord.y).style.color =
        cellTextColor;
      document.getElementById(coord.x + "" + coord.y).style.fontWeight = "bold";
    }
  }, [coord.x, coord.y]);

  const inputCellValue = (rowValue, colValue) => {
    event.target.style.backgroundColor = boardResult;
    xInputField.current.value = rowValue;
    yInputField.current.value = colValue;
    setCoord({ x: xInputField.current.value, y: yInputField.current.value });
  };

  const Board = ({ disable }) => {
    return (
      <div className={"board"}>
        {[1, 2, 3, 4, 5, 6, 7].map((colElem) => {
          return (
            <div className="row">
              {[5, 4, 3, 2, 1].map((rowElem) => {
                return (
                  <button
                    type="button"
                    id={rowElem + "" + colElem}
                    className={"cell"}
                    onClick={(e) => {
                      e.target.style.backgroundColor = "white";
                      inputCellValue(rowElem, colElem);
                    }}
                    disabled={disable}
                  >
                    {rowElem}, {colElem}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section className={"container"}>
      <nav>
        Color Board
        <div className={"nav-connect-button"}>
          <ConnectButton />
        </div>
      </nav>
      <section className={"main-container"}>
        <div className={"board-container"}>
          <Board />
        </div>

        <section className={"input-container"}>
          <div>
            {isConnected && <label htmlFor="x-axis">X axis value:</label>}
            <input
              id="x-axis"
              type="number"
              defaultValue={1}
              min={1}
              max={5}
              step={1}
              pattern="[1-5]"
              ref={xInputField}
              disabled={!isConnected}
            />
          </div>

          <div>
            {isConnected && <label htmlFor="y-axis">Y axis value:</label>}
            <input
              id="y-axis"
              type="number"
              defaultValue={1}
              min={1}
              max={7}
              step={1}
              pattern="[1-7]"
              ref={yInputField}
              disabled={!isConnected}
            />
          </div>
          <button
            type="button"
            onClick={() =>
              inputCellValue(
                xInputField.current.value,
                yInputField.current.value
              )
            }
            disabled={!isConnected || isLoading}
          >
            Find
          </button>
        </section>
      </section>
    </section>
  );
}
