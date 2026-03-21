var reverseSubmatrix = function (grid, x, y, k) {
  let a = [1, 2, 3, 4, 5, 6, 7];
  let n = grid.length;
  const lim = (n - x) / 2;
  while (x < lim) {
    n--;
    for (let i = y; i < y + k; i++) {
      [grid[n][i], grid[x][i]] = [grid[x][i], grid[n][i]];
    }
    x++;
  }
  return grid;
};

const grid = [
  [4, 20, 8, 20],
  [2, 16, 3, 12],
  [3, 12, 17, 1],
  [3, 13, 2, 13],
];
const x = 1;
const y = 1;
const k = 1;
console.log(reverseSubmatrix(grid, x, y, k));
