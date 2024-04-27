/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function (grid) {
  let n = grid.length;
  let arr = new Array(n).fill().map(() => new Array(n).fill(0));
  arr[0] = grid[0];
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let temp = Infinity;
      for (let k = 0; k < n; k++) {
        if (j != k) temp = Math.min(temp, arr[i - 1][k] + grid[i][j]);
      }
      arr[i][j] = temp;
    }
  }
  let res = Infinity;
  arr[n - 1].forEach((x) => (res = Math.min(res, x)));
  return res;
};
let grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
[
  [1, 2, 3],
  [6, 6, 7],
  [13, 14, 15],
];
console.log(minFallingPathSum(grid));
