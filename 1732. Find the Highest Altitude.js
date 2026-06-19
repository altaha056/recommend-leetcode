var largestAltitude = function (gain) {
  let cur = 0;
  let max = 0;
  for (let i = 0; i < gain.length; i++) {
    cur += gain[i];
    if (cur > max) max = cur;
  }
  return max;
};
const gain = [-5, 1, 5, 0, -7];
console.log(largestAltitude(gain));
