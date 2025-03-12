var maximumCount = function (nums) {
  let i = 0;
  while (nums[i] < 0) i++;
  let j = i;
  while (nums[j] <= 0) j++;
  return Math.max(i, nums.length - j);
};
const nums = [5, 20, 66, 1314];
console.log(maximumCount(nums));
