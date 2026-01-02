var repeatedNTimes = function (nums) {
  let n = nums.length / 2;
  nums.sort((a, b) => a - b);
  let cur = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[cur]) {
      if (i - cur + 1 >= n) {
        return nums[i];
      }
      continue;
    }
    cur = i;
  }

  return nums[cur];
};
const nums = [2, 1, 2, 5, 3, 2];
console.log(repeatedNTimes(nums));
