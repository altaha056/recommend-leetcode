var countUnguarded = function (m, n, guards, walls) {
  const grid = Array.from({ length: m }, () => Array(n).fill(0));
  for (const g of guards) grid[g[0]][g[1]] = 1;
  for (const w of walls) grid[w[0]][w[1]] = 2;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  for (const g of guards) {
    const r = g[0];
    const c = g[1];
    for (const d of directions) {
      let nr = r + d[0];
      let nc = c + d[1];
      while (nr >= 0 && nr < m && nc >= 0 && nc < n) {
        if (grid[nr][nc] == 2 || grid[nr][nc] == 1) break;
        if (grid[nr][nc] == 0) grid[nr][nc] = 3;
        nr += d[0];
        nc += d[1];
      }
    }
  }
  let ans = 0;
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) if (grid[i][j] == 0) ans++;

  return ans;
};
const m = 4;
const n = 6;
const guards = [
  [0, 0],
  [1, 1],
  [2, 3],
];
const walls = [
  [0, 1],
  [2, 2],
  [1, 4],
];
console.log(countUnguarded(m, n, guards, walls));
