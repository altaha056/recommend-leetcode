var findNumbers = function (nums) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 == 0) ans++;
  }
  return ans;
};
const nums = [12, 345, 2, 6, 7896];
console.log(findNumbers(nums));
