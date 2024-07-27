var frequencySort = function (nums) {
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    if (count[nums[i]] == null) {
      count[nums[i]] = 1;
    } else count[nums[i]]++;
  }
  let arr = Object.entries(count);
  arr.sort((b, a) => a[0] - b[0]);
  arr.sort((a, b) => a[1] - b[1]);
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    ans.push(new Array(arr[i][1]).fill(arr[i][0]));
  }
  return ans.flat();
};
let nums = [2, 3, 1, 3, 2];
console.log(frequencySort(nums));
