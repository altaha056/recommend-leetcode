var removeStars = function (s) {
  let ans = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] != "*") {
      ans.push(s[i]);
    } else {
      ans.pop();
    }
  }
  return ans.join("");
};
let s = "leet**cod*e";
console.log(removeStars(s));
