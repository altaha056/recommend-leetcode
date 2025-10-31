var getSneakyNumbers = function (nums) {
  const ans = [];
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) {
      ans.push(nums[i]);
    }
  }
  return ans;
};
nums = [7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2];
console.log(getSneakyNumbers(nums));
