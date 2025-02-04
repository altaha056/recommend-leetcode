var maxAscendingSum = function (nums) {
  let current = nums[0];
  let maxSum = current;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      current += nums[i];
      maxSum = Math.max(maxSum, current);
    } else {
      current = nums[i];
    }
  }
  return maxSum;
};
const nums = [10, 20, 30, 5, 10, 50];
console.log(maxAscendingSum(nums));
