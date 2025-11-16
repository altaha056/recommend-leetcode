var numSub = function (s) {
  let ans = 0;
  let cur = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "1") {
      cur++;
    } else {
      if (s[i - 1] == "1") {
        ans += (cur * (cur + 1)) / 2;
        cur = 0;
      }
    }
  }
  if (s[s.length - 1] == "1") ans += (cur * (cur + 1)) / 2;
  return ans % (Math.pow(10, 9) + 7);
};

console.log(numSub("0110111"));
