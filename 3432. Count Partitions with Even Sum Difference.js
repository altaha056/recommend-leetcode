var countPartitions = function (nums) {
  let a = 0;
  let b = nums.reduce((a, b) => a + b, 0);
  ans = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if ((a - b) % 2 == 0) ans++;
  }
  return ans;
};
const nums = [1, 2, 2];
console.log(countPartitions(nums));
