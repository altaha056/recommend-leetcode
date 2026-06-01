var minimumCost = function (cost) {
  cost.sort((a, b) => b - a);
  let total = 0;
  let j = 0;
  for (let i = 0; i < cost.length; i++) {
    j++;
    if (j == 3) {
      j = 0;
      continue;
    }
    total += cost[i];
  }
  return total;
};
const cost = [6, 5, 7, 9, 2, 2];
console.log(minimumCost(cost));
