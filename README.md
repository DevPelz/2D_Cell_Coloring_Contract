# Board Smart Contract

## Overview

The "Board" smart contract is built using Solidity and represents a 2D board with cells that can be filled with different colors. This contract offers functions to query individual cell colors, as well as retrieve colors based on specific coordinates. It serves as a demonstration of managing and querying colors within a 2D grid.

## Contract Details

- **Solidity Version:** ^0.8.19
- **Board Size:** 5 (X-axis) x 7 (Y-axis)
- **Colors Enum:**
  - White (ID: 0)
  - Black (ID: 1)
  - Red (ID: 2)
  - Blue (ID: 3)

## Usage

### Initialization

The contract's constructor initializes the board by assigning colors to each cell based on its coordinates. Color assignments are made according to the following pattern:

- Cells with an (X + Y) modulo 4 equal to 0: White
- Cells with an (X + Y) modulo 4 equal to 1: Black
- Cells with an (X + Y) modulo 4 equal to 2: Red
- Cells with an (X + Y) modulo 4 equal to 3: Blue

### Public Functions

- `getCellColor(uint8 X, uint8 Y) external view returns (string memory)`: Queries the color of a specific cell on the board by providing X and Y coordinates.

- `getColorAtCoordinates(uint8 X1, uint8 X2, uint8 Y1, uint8 Y2) external view returns (string memory, string memory)`: Retrieves the colors of two cells based on specified coordinates (X1, Y1) and (X2, Y2).

### Internal Function

- `getColor(uint8 colorID) internal pure returns (string memory)`: An internal function that converts color IDs to their corresponding color names (e.g., 0 to "White").

## Examples

You can interact with this contract to retrieve cell colors and color pairs based on coordinates using the provided functions. Here are some examples:

```solidity
// Query the color of a specific cell
string memory cellColor = board.getCellColor(2, 3);

// Retrieve colors at specific coordinates
(string memory color1, string memory color2) = board.getColorAtCoordinates(1, 4, 2, 3);

```

# Getting Started

Run `npm run dev` in your terminal, and then open [localhost:5173](http://localhost:5173) in your browser.

Once the webpage has loaded, changes made to files inside the `src/` directory (e.g. `src/App.tsx`) will automatically update the webpage.
