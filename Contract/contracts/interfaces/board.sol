// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IBoard {
    function getCellColor(
        uint8 _x,
        uint8 _y
    ) external view returns (string memory);

    function getColorAtCoordinates(
        uint8 _x1,
        uint8 _x2,
        uint8 _y1,
        uint8 _y2
    ) external view returns (string memory, string memory);
}
