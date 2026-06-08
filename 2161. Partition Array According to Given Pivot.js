var pivotArray = function (nums, pivot) {
  let start = [];
  let end = [];
  let countP = 0;
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (cur < pivot) {
      start.push(cur);
    } else if (cur > pivot) {
      end.push(cur);
    } else countP++;
  }
  for (let i = 0; i < countP; i++) {
    start.push(pivot);
  }
  return [...start, ...end];
};
const nums = [9, 12, 5, 10, 14, 3, 10];
const pivot = 10;
console.log(pivotArray(nums, pivot));
