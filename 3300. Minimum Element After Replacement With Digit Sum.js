var minElement = function (nums) {
  let ans = countT(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    const cur = countT(nums[i]);
    if (cur < ans) ans = cur;
  }
  return ans;

  function countT(s) {
    return s
      .toString()
      .split("")
      .reduce((a, v) => parseInt(a) + parseInt(v), 0);
  }
};
const nums = [10, 12, 13, 14];
console.log(minElement(nums));
