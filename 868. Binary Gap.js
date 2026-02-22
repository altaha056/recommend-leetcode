var binaryGap = function (n) {
  n = n.toString(2);
  let curPos = 0;
  let max = 0;
  for (let i = 1; i < n.length; i++) {
    if (n[i] == "1") {
      max = Math.max(max, i - curPos);
      curPos = i;
    }
  }
  return max;
};
console.log(binaryGap(20));
