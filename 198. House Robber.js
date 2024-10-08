var rob = function (nums) {
  if (nums.length == 1) return nums[0];
  nums[1] = Math.max(nums[1], nums[0]);
  for (let i = 2; i < nums.length; i++) {
    nums[i] = Math.max(nums[i - 1], nums[i] + nums[i - 2]);
  }
  return nums[nums.length - 1];
};
let nums = [2, 7, 9, 3, 1];
console.log(rob(nums));
