var kLengthApart = function (nums, k) {
  let one = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      if (i - one <= k) return false;
      one = i;
    }
  }
  return true;
};
const nums = [1, 0, 1, 0, 1, 0, 0, 1];
const k = 2;
console.log(kLengthApart(nums, k));
