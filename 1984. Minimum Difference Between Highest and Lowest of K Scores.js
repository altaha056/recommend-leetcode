var minimumDifference = function (nums, k) {
  if (nums.length == 1) return 0;
  nums.sort((a, b) => a - b);
  let ans = Infinity;
  for (let i = 0; k <= nums.length; i++) {
    let cur = nums[k - 1] - nums[i];
    if (cur < ans) {
      ans = cur;
    }
    k++;
  }
  return ans;
};
const nums = [9, 4, 1, 7];
const k = 2;
console.log(minimumDifference(nums, k));
