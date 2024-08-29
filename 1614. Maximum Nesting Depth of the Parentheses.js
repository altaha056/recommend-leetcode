var maxDepth = function (s) {
  let max = 0;
  let cur = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      cur++;
      max = Math.max(max, cur);
    }
    if (s[i] == ")") {
      cur--;
    }
  }
  return max;
};
let s = "(1)+((2))+(((3)))";
console.log(maxDepth(s));
