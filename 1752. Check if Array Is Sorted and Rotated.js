var check = function (nums) {
  let isRotate = null;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      if (isRotate != null) return false;
      isRotate = i;
    }
  }
  if (isRotate == null) return true;
  if (nums[isRotate] > nums[0] || nums[nums.length - 1] > nums[0]) return false;
  return true;
};
const nums = [3, 4, 5, 1, 2];

console.log(check(nums));
