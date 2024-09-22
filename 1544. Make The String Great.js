var makeGood = function (s) {
  let t = s.toLowerCase();
  for (let i = 1; i < s.length; i++) {
    if (t[i] == t[i - 1] && s[i] != s[i - 1]) {
      s = s.slice(0, i - 1) + s.slice(i + 1);
      t = s.toLowerCase();
      i = 0;
    }
  }
  return s;
};
let s = "leeEetcode";
console.log(makeGood(s));
