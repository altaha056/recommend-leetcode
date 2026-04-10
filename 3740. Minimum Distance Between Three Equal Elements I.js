var minimumDistance = function (nums) {
  let ans = Infinity;
  if (nums.length < 3) return -1;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] === nums[j]) {
        for (let k = j + 1; k < n; k++) {
          if (nums[j] === nums[k]) {
            ans = Math.min(ans, 2 * (k - i));
          }
        }
      }
    }
  }
  return ans === Infinity ? -1 : ans;
};
const nums = [1, 2, 1, 1, 3];
console.log(minimumDistance(nums));
