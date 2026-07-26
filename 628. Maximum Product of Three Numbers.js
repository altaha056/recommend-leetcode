var maximumProduct = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const l = nums[0] * nums[1] * nums[n - 1];
  const r = nums[n - 1] * nums[n - 2] * nums[n - 3];
  return Math.max(l, r);
};
const nums = [-8, -7, -2, 10, 20];
console.log(maximumProduct(nums));
