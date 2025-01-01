var maxScore = function (s) {
  let curLeft = 0;
  let curRight = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") curRight++;
  }
  let max = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "0") {
      curLeft++;
    } else {
      curRight--;
    }
    max = Math.max(max, curLeft + curRight);
  }
  return max;
};
const s = "00";
console.log(maxScore(s));
