// URL: https://leetcode.com/problems/number-of-islands/
const testMatrix = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],
  [0, 1, 1, 1, 0],
  [1, 0, 1, 0, 1],
];

/**
 * first visit 1, 1 is visited
 * then move to top -> if top is unavailable go to right, down, left according
 * if already visited, return back and start again
 */

const directions = [
  [-1, 0], // UP
  [0, 1], // RIGHT
  [1, 0], // down
  [0, -1], // left
];

const dfs = (grid, currentRow, currentCol) => {
  if (
    currentRow < 0 ||
    currentRow >= grid.length ||
    currentCol < 0 ||
    currentCol >= grid[0].length
  )
    return;

  if (grid[currentRow][currentCol] === 1) {
    grid[currentRow][currentCol] = 0;

    for (let idx = 0; idx < directions.length; idx++) {
      const currentDir = directions[idx];
      const row = currentDir[0];
      const col = currentDir[1];

      dfs(grid, currentRow + row, currentCol + col);
    }
  }
};

const numberOfIslands = (grid) => {
  if (!grid.length) return 0;

  let islandCount = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        islandCount++;
        dfs(grid, row, col);
      }
    }
  }

  return islandCount;
};

console.log(numberOfIslands(testMatrix));
