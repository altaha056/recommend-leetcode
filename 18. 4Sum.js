var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  let ans = [];
  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          ans.push([nums[i], nums[j], nums[left], nums[right]]);
          while (nums[left] === nums[left + 1]) left++;
          while (nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (sum > target) {
          right--;
        } else left++;
      }
      while (nums[j] === nums[j + 1]) j++;
    }
    while (nums[i] === nums[i + 1]) i++;
  }
  return ans;
};
let nums = [1, 0, -1, 0, -2, 2];
let target = 0;

console.log(fourSum(nums, target));
