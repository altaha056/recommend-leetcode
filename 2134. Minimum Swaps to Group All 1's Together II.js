var minSwaps = function (nums) {
  const n = nums.length;
  const totalones = nums.reduce((sum, num) => sum + num, 0);
  return totalones;
};
let nums = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
console.log(minSwaps(nums));

0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1;
