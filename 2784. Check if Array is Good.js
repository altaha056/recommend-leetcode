var isGood = function (nums) {
  let n = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] != i + 1) return false;
  }
  if (nums[n - 1] != nums[n - 2]) return false;
  return true;
};
const nums = [1, 1];
console.log(isGood(nums));
