var countValidSelections = function (nums) {
  let left = 0;
  let right = nums.reduce((a, b) => a + b, 0);
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    left += nums[i];
    right -= nums[i];
    if (nums[i] == 0) {
      if (left - right == 0) ans += 2;
      if (Math.abs(left - right) == 1) ans += 1;
    }
  }
  return ans;
};
const nums = [1, 0, 2, 0, 0, 3];
console.log(countValidSelections(nums));
