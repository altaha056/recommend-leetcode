var maximumAmount = function (coins) {
  const rows = coins.length;
  const cols = coins[0].length;
  const skips = 3;
  const cost = [];

  for (let i = 0; i <= rows; ++i) {
    cost[i] = [];
    for (let j = 0; j <= cols; ++j) {
      cost[i][j] = new Array(skips).fill(Number.MIN_SAFE_INTEGER);
    }
  }
  cost[0][1] = new Array(skips).fill(0);

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      for (let k = 0; k < skips; ++k) {
        let currCost =
          coins[i][j] + Math.max(cost[i][j + 1][k], cost[i + 1][j][k]);
        if (k > 0) {
          currCost = Math.max(
            currCost,
            cost[i][j + 1][k - 1],
            cost[i + 1][j][k - 1],
          );
        }
        cost[i + 1][j + 1][k] = currCost;
      }
    }
  }
  return Math.max(...cost[rows][cols]);
};
const coins = [
  [0, 1, -1],
  [1, -2, 3],
  [2, -3, 4],
];
console.log(maximumAmount(coins));
