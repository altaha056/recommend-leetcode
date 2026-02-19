var countBinarySubstrings = function (s) {
  let prev = 0;
  let strk = 1;
  let ans = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      strk++;
    } else {
      prev = strk;
      strk = 1;
    }
    if (strk <= prev) ans++;
  }
  return ans;
};
const s = "00110011";
console.log(countBinarySubstrings(s));
