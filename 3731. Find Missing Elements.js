var findMissingElements = function (nums) {
  const ans = [];
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] > 1) {
      let a = nums[i - 1] + 1;
      while (a < nums[i]) {
        ans.push(a);
        a++;
      }
    }
  }
  return ans;
};
const nums = [1, 4, 2, 5];
console.log(findMissingElements(nums));
