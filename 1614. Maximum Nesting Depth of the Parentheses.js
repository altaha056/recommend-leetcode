var maxDepth = function (s) {
  let max = 0;
  let cur = 0;
  for (let i = 0; i < s.length; i++) {
    if (!(s[i] == "(" || s[i] == ")")) continue;
    if (s[i] == "(") {
      cur++;
      max = Math.max(max, cur);
      continue;
    } else cur--;
  }
  return max;
};
