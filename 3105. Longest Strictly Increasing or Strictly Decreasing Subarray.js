var longestMonotonicSubarray = function (nums) {
  let longest = 1;
  let increase = 1;
  let decrease = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      increase += 1;
      decrease = 1;
    } else if (nums[i] < nums[i - 1]) {
      decrease += 1;
      increase = 1;
    } else {
      increase = 1;
      decrease = 1;
    }
    longest = Math.max(longest, increase);
    longest = Math.max(longest, decrease);
  }
  return longest;
};
const nums = [1, 9, 7, 1];
console.log(longestMonotonicSubarray(nums));
