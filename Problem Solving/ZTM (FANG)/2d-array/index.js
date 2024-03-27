// DFS using array
const testMatrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
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

const traverseDFS = (matrix) => {
  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));

  const values = [];

  dfs(matrix, 0, 0, seen, values);

  return values;
};

const dfs = (matrix, row, col, seen, values) => {
  if (
    row < 0 ||
    col < 0 ||
    row >= matrix.length ||
    col >= matrix[0].length ||
    seen[row][col]
  )
    return;

  seen[row][col] = true;
  values.push(matrix[row][col]);

  for (let idx = 0; idx < directions.length; idx++) {
    const currentDir = directions[idx];
    dfs(matrix, row + currentDir[0], col + currentDir[1], seen, values);
  }
};

console.log("DFS traverse using 2d-array: ", traverseDFS(testMatrix));
