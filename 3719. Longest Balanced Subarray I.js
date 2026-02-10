var longestBalanced = function (nums) {
  let res = 0;
  let arr = new Int32Array(Math.max(...nums) + 1);
  for (let i = 0; i < nums.length; i++) {
    const A = [0, 0];
    for (let j = i; j < nums.length; j++) {
      const val = nums[j];
      if (arr[val] != i + 1) {
        arr[val] = i + 1;
        A[val & 1]++;
      }
      if (A[0] === A[1]) res = Math.max(res, j - i + 1);
    }
  }
  return res;
};
const nums = [1, 2, 3, 2];
console.log(longestBalanced(nums));
