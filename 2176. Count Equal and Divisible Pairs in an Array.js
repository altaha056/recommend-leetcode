var countPairs = function (nums, k) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && (i * j) % k == 0) ans++;
    }
  }
  return ans;
};
const nums = [3, 1, 2, 2, 2, 1, 3];
const k = 2;
console.log(countPairs(nums, k));
