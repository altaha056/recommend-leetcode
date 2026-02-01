var minimumCost = function (nums) {
  let ans = nums[0];
  nums.splice(0, 1);
  nums.sort((a, b) => a - b);
  return ans + nums[0] + nums[1];
};

const nums = [1, 2, 3, 12, 4];
console.log(minimumCost(nums));
