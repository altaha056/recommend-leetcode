var findFinalValue = function (nums, original) {
  const s = new Set(nums);
  while (true) {
    if (!s.has(original)) break;
    original *= 2;
  }
  return original;
};
const nums = [5, 3, 6, 1, 12];
const original = 3;
console.log(findFinalValue(nums, original));
