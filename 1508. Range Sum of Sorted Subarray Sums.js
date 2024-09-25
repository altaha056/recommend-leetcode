var rangeSum = function (nums, n, left, right) {
  const mod = 1e9 + 7;
  let ans = 0;
  let arr = [];
  for (let i = 0; i < n; i++) {
    let cur = nums[i];
    let j = i + 1;
    arr.push(cur);
    while (j < n) {
      cur += nums[j];
      arr.push(cur);
      j++;
    }
  }
  arr.sort((a, b) => a - b);
  for (let i = left - 1; i < right; i++) {
    ans = (ans + arr[i]) % mod;
  }
  return ans;
};
const nums = [1, 2, 3, 4];
const n = 4;
const left = 3;
const right = 4;
console.log(rangeSum(nums, n, left, right));
