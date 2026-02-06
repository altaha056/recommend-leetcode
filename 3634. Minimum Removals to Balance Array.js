var minRemoval = function (nums, k) {
  nums.sort((a, b) => a - b);
  let i = 0;
  let maxSpan = 0;
  for (let j = 0; j < nums.length; j++) {
    while (nums[j] > nums[i] * k) i++;
    maxSpan = Math.max(maxSpan, j - i + 1);
  }
  return nums.length - maxSpan;
};
const nums = [2, 1, 5];
const k = 2;
console.log(minRemoval(nums, k));
