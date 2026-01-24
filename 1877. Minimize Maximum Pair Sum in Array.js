var minPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let ans = 0;
  let n = nums.length;
  for (let i = 0; i < n / 2; i++) {
    const res = nums[i] + nums[n - i - 1];
    if (res > ans) {
      ans = res;
    }
  }
  return ans;
};
const nums = [3, 5, 4, 2, 4, 6];
console.log(minPairSum(nums));
