var minDominoRotations = function (tops, bottoms) {
  let ans = Infinity;
  let n = tops.length;
  for (let i = 1; i <= 6; i++) {
    let flipTop = 0;
    let flipBottom = 0;
    let valid = true;
    for (let j = 0; j < n; j++) {
      if (tops[j] != i && bottoms[j] != i) {
        valid = false;
        break;
      }
      if (tops[j] != i) flipBottom++;
      if (bottoms[j] != i) flipTop++;
    }
    if (valid) ans = Math.min(flipTop, flipBottom, ans);
  }
  return ans == Infinity ? -1 : ans;
};
let tops = [2, 1, 2, 4, 2, 2];
let bottoms = [5, 2, 6, 2, 3, 2];
console.log(minDominoRotations(tops, bottoms));
