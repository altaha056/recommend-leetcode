var minimumSteps = function (s) {
  let blackBall = 0;
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "1") {
      blackBall++;
    } else {
      ans += blackBall;
    }
  }
  return ans;
};
let s = "1100";
console.log(minimumSteps(s));
