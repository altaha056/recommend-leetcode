var maxTotalValue = function (nums, k) {
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return (max - min) * k;
};
const nums = [4, 2, 5, 1];
const k = 3;
console.log(maxTotalValue(nums, k));
