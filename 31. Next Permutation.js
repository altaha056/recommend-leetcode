var nextPermutation = function (nums) {
  console.log(nums);
  const n = nums.length;
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      for (let j = n - 1; j > i; j--) {
        if (nums[j] > nums[i]) {
          swap(nums, i, j);
          console.log(nums);
          reverse(nums, i + 1, n - 1);
          return nums;
        }
      }
    }
  }
  nums.reverse();
  return nums;
};

const swap = (nums, i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);

const reverse = (nums, start, end) => {
  while (start < end) {
    swap(nums, start++, end--);
  }
};

let nums = [1, 4, 3, 2, 1]; //5,4,1,2,3
console.log(nextPermutation(nums));
