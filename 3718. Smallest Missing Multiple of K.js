var missingMultiple = function (nums, k) {
  let a = new Set();
  let acc = k;
  nums.forEach((x) => a.add(x));
  while (true) {
    if (!a.has(k)) {
      return k;
    }
    k += acc;
  }
};
const nums = [8, 2, 3, 4, 6];
const k = 2;
console.log(missingMultiple(nums, k));
