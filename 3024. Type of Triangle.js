var triangleType = function (nums) {
  if (nums[1] == nums[0] && nums[0] == nums[2]) return "equilateral";
  if (nums[1] == nums[0] || nums[0] == nums[2] || nums[1] == nums[2])
    return "isosceles";
  if (
    nums[1] + nums[0] > nums[2] &&
    nums[1] + nums[2] > nums[0] &&
    nums[0] + nums[2] > nums[1]
  )
    return "scalene";
  return "none";
};
const nums = [5, 3, 4];
console.log(triangleType(nums));
