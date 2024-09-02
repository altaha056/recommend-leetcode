var construct2DArray = function (original, m, n) {
  if (m * n != original.length) return [];
  const ans = [];
  let sub = [];
  for (let i = 0; i < original.length; i++) {
    sub.push(original[i]);
    if ((i + 1) % n == 0) {
      ans.push(sub);
      sub = [];
    }
  }
  return ans;
};
let original = [1, 2, 3];
let m = 1;
let n = 3;
console.log(construct2DArray(original, m, n));
