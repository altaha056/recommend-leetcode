var minCost = function (colors, neededTime) {
  let ans = 0;
  let curMax = neededTime[0];
  for (let i = 1; i < colors.length; i++) {
    if (colors[i] == colors[i - 1]) {
      ans += Math.min(curMax, neededTime[i]);
      curMax = Math.max(curMax, neededTime[i]);
    } else {
      curMax = neededTime[i];
    }
  }
  return ans;
};
const colors = "abaaaaaac";
const neededTime = [1, 2, 5, 6, 3, 3, 2, 7, 5];
console.log(minCost(colors, neededTime));
