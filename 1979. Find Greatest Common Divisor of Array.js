var findGCD = function (nums) {
  let smallest = 1000;
  let largest = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) largest = nums[i];
    if (nums[i] < smallest) smallest = nums[i];
  }
  let i = 1;
  let ans = i;
  while (i < smallest) {
    i++;
    if (smallest % i == 0 && largest % i == 0) ans = i;
  }
  return ans;
};
const nums = [3, 3];
console.log(findGCD(nums));
