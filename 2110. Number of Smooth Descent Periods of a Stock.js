var getDescentPeriods = function (prices) {
  let ans = prices.length;
  let cur = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] - prices[i] == 1) {
      cur++;
    } else if (cur > 0) {
      ans += (cur * (cur + 1)) / 2;
      cur = 0;
    }
  }
  if (cur > 0) {
    ans += (cur * (cur + 1)) / 2;
    cur = 0;
  }
  return ans;
};
const prices = [3, 2, 1, 4];
console.log(getDescentPeriods(prices));
