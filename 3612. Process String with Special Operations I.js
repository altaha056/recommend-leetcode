var processStr = function (s) {
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "*") {
      ans = ans.slice(0, -1);
    } else if (s[i] == "#") {
      ans += ans;
    } else if (s[i] == "%") {
      ans = ans.split("").reverse().join("");
    } else ans += s[i];
    console.log(s[i], ans);
  }
  return ans;
};
const s = "a#b%*";
console.log(processStr(s));
