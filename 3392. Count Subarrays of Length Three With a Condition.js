var countSubarrays = function (nums) {
  let ans = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] + nums[i + 2] == nums[i + 1] / 2) ans++;
  }
  return ans;
};
const nums = [1, 2, 1, 4, 1];
console.log(countSubarrays(nums));
