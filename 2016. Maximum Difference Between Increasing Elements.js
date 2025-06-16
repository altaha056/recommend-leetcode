var maximumDifference = function (nums) {
  let ans = -1;
  let min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    min = Math.min(min, nums[i - 1]);
    if (nums[i] > min) {
      ans = Math.max(nums[i] - min, ans);
    }
  }
  return ans;
};
const nums = [1, 5, 2, 10];
console.log(maximumDifference(nums));
