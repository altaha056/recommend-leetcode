var maxDistance = function (colors) {
  let ans = 0;

  let exist = new Set();
  for (let i = 0; i < colors.length; i++) {
    if (exist.has(colors[i])) continue;
    exist.add(colors[i]);
    for (let j = colors.length - 1; j > i; j--) {
      if (colors[i] === colors[j]) continue;
      ans = Math.max(ans, j - i);
      break;
    }
  }
  return ans;
};
const colors = [4, 4, 4, 11, 4, 4, 11, 4, 4, 4, 4, 4];
console.log(maxDistance(colors));
