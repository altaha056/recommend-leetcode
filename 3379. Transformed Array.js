var constructTransformedArray = function (nums) {
  let ans = [];
  let len = nums.length;
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums.at((i + nums[i]) % len));
  }
  return ans;
};
const nums = [3, -2, 1, 1];
console.log(constructTransformedArray(nums));
