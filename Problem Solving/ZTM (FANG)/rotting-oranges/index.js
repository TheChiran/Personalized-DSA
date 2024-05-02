// URL: https://leetcode.com/problems/rotting-oranges/description/
/*
 * 1. Rotting oranges
 * 2. Fresh oranges
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */

// INITIALIZE DIRECTION
const DIRECTIONS = [
  [-1, 0], // UP
  [0, 1], // RIGHT
  [1, 0], // down
  [0, -1], // left
];

const EMPTY = 0;
const FRESH = 1;
const ROTTEN = 2;

const orangesRotting = function (grid) {
  // Check if grid is null or empty
  if (grid.length === 0) return 0;

  // count fresh oranges
  let freshOranges = 0;
  // store rotten into queue
  const queue = [];

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === ROTTEN) {
        queue.push([row, col]);
      }

      if (grid[row][col] === FRESH) freshOranges++;
    }
  }

  // Initialize minutes, current Queue size, currentOrange
  let minutes = 0;
  let currentQueueSize = queue.length;

  while (queue.length > 0) {
    // run until there is orange(rotten in queue)
    if (currentQueueSize === 0) {
      // Replace current queue size with queue length and increase length
      currentQueueSize = queue.length;
      minutes++;
    }

    const currentOrange = queue.shift();
    currentQueueSize--;

    // Get next row and col
    const row = currentOrange[0];
    const col = currentOrange[1];

    for (let idx = 0; idx < DIRECTIONS.length; idx++) {
      const currentDIR = DIRECTIONS[idx];
      const nextRow = row + currentDIR[0];
      const nextCol = col + currentDIR[1];

      if (
        nextRow < 0 ||
        nextRow >= grid.length ||
        nextCol < 0 ||
        nextCol >= grid[0].length
      )
        continue;

      if (grid[nextRow][nextCol] === FRESH) {
        grid[nextRow][nextCol] = 2;
        freshOranges--;
        queue.push([nextRow, nextCol]);
      }
    }
  }

  // return -1, if there is still some fresh oranges
  if (freshOranges !== 0) return -1;

  return minutes;
};
