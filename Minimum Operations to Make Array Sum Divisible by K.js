var minOperations = function (nums, k) {
  return nums.reduce((a, b) => a + b, 0) % k;
};
const nums = [3, 9, 7];
const k = 5;

console.log(minOperations(nums, k));
