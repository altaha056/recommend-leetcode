var smallestIndex = function (nums) {
  let ans = -1;
  for (let i = 0; i < nums.length; i++) {
    let cur = 0;
    if (nums[i] > 9) {
      let n = nums[i].toString();
      for (let i = 0; i < n.length; i++) {
        cur += parseInt(n[i]);
      }
    } else cur = nums[i];
    if (cur == i) return cur;
  }
  return ans;
};
const nums = [1, 3, 2];
console.log(smallestIndex(nums));
