/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];

  let iterate = (arr, temp) => {
    console.log(arr, temp);
    if (arr.length == 0) {
      res.push(temp);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == arr[i - 1]) continue;
      iterate(
        arr.filter((num, idx) => idx != i),
        [...temp, arr[i]]
      );
    }
  };
  iterate(nums, []);
  return res;
};

let nums = [1, 2, 1];
console.log(permuteUnique(nums));
