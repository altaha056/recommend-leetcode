var maxFrequencyElements = function (nums) {
  let a = {};
  let count = 0;
  let max = 1;
  for (let i = 0; i < nums.length; i++) {
    if (a[nums[i]] >= 1) {
      a[nums[i]] += 1;
      max = Math.max(max, a[nums[i]]);
    } else {
      a[nums[i]] = 1;
    }
  }

  for (let key in a) {
    if (a[key] == max) count += max;
  }

  return count;
};
const nums = [1, 2, 2, 3, 1, 4];
console.log(maxFrequencyElements(nums));
