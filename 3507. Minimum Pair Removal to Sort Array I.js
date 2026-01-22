var isSorted = function (nums, n) {
  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[i - 1]) return false;
  }
  return true;
};
var minimumPairRemoval = function (nums) {
  console.log("tesxx");

  let ans = 0;
  let n = nums.length;
  while (!isSorted(nums, n)) {
    ans += 1;
    let minSum = Infinity;
    let pos = -1;
    for (let i = 1; i < n; i++) {
      let sum = nums[i - 1] + nums[i];
      if (sum < minSum) {
        minSum = sum;
        pos = i;
      }
    }
    nums[pos - 1] = minSum;
    for (let i = pos; i < n - 1; i++) nums[i] = nums[i + 1];
    n--;
  }

  return ans;
};
const nums = [8, 7, 2, 4, 8];
console.log(minimumPairRemoval(nums));
