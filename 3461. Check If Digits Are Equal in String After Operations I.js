var hasSameDigits = function (s) {
  while (s.length > 2) {
    let a = "";
    for (let i = 1; i < s.length; i++) {
      a += (parseInt(s[i]) + parseInt(s[i - 1])) % 10;
    }
    s = a;
  }
  return s[0] == s[1] ? true : false;
};
const s = "34789";
console.log(hasSameDigits(s));
