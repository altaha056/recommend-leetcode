var getMinDistance = (nums, target, start) =>
  nums.reduce(
    (min, val, i) =>
      val === target ? Math.min(min, Math.abs(i - start)) : min,
    Infinity,
  );
const nums = [1, 2, 3, 4, 5];
const target = 5;
const start = 3;
console.log(getMinDistance(nums, target, start));
