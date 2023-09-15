// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Board {
    uint8 public boardSize_x_axis = 5;
    uint8 public boardSize_y_axis = 7;

    enum Colors {
        white,
        black,
        red,
        blue
    }

    // mapping to store the ids
    mapping(uint256 => mapping(uint256 => Colors)) _boardIds;

    constructor() {
        for (uint8 x = 0; x < boardSize_x_axis; x++) {
            for (uint8 y = 0; y < boardSize_y_axis; y++) {
                if ((x + y) % 4 == 0) {
                    _boardIds[x][y] = Colors.white;
                } else if ((x + y) % 4 == 1) {
                    _boardIds[x][y] = Colors.black;
                } else if ((x + y) % 4 == 2) {
                    _boardIds[x][y] = Colors.red;
                } else {
                    _boardIds[x][y] = Colors.blue;
                }
            }
        }
    }

    function getCellColor(
        uint8 _x,
        uint8 _y
    ) external view returns (string memory) {
        require(
            _x <= boardSize_x_axis && _y <= boardSize_y_axis,
            "Invalid x or y axis"
        );
        return getColor(uint8(_boardIds[_x][_y]));
    }

    function getColor(uint8 _id) internal pure returns (string memory) {
        if (_id == 1) return "Black";
        if (_id == 2) return "Red";
        if (_id == 3) return "Blue";
        return "White";
    }
}
