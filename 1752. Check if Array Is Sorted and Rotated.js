var check = function (nums) {
  let count = 0;
  let n = nums.length - 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      count++
      if (nums[n] > nums[0]) return false;
    }
    if(count>1)return false
  }
  return true;
};
const nums = [2, 7, 4, 1, 2, 6, 2];
console.log(check(nums));
