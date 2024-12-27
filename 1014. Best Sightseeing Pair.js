// values[i]+values[j]+i-j
// (values[i]+i) + (values[j]-j)
var maxScoreSightseeingPair = function (values) {
  const n = values.length;
  let arr = new Array(n);
  arr[n - 1] = values[n - 1] - (n - 1);
  for (let j = n - 2; j >= 0; j--) {
    arr[j] = Math.max(arr[j + 1], values[j] - j);
  }
  let ans = -Infinity;
  for (let i = 0; i < n - 1; i++) {
    const cur = values[i] + i + arr[i + 1];
    if (cur > ans) ans = cur;
  }
  return ans;
};
const values = [1, 2];
console.log(maxScoreSightseeingPair(values));
