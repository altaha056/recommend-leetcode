var triangleType = function (nums) {
  if (nums[1] == nums[0] && nums[0] == nums[2]) return "equilateral";
  if (
    nums[1] + nums[0] <= nums[2] ||
    nums[1] + nums[2] <= nums[0] ||
    nums[0] + nums[2] <= nums[1]
  )
    return "none";

  if (nums[1] == nums[0] || nums[0] == nums[2] || nums[1] == nums[2])
    return "isosceles";
  return "scalene";
};
const nums = [5, 3, 3];
console.log(triangleType(nums));
