var maxSubsequence = function (nums, k) {
  nums.forEach((e, i) => {
    nums[i] = [e, i];
  });
  nums.sort((a, b) => a[0] - b[0]);
  nums.splice(0, nums.length - k);
  nums.sort((a, b) => a[1] - b[1]);
  nums.forEach((e, i) => {
    nums[i] = nums[i][0];
  });
  return nums;
};
const nums = [-1, -2, 3, 4];
const k = 3;
console.log(maxSubsequence(nums, k));
