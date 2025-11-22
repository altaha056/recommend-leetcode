var minimumOperations = function (nums) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i] % 3;
    if (cur == 1 || cur == 2) ans += 1;
  }
  return ans;
};
const nums = [1, 2, 3, 4];
console.log(minimumOperations(nums));
