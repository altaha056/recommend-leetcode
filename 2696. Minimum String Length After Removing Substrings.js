var minLength = function (s) {
  while (true) {
    if (s != s.replace("AB", "") || s != s.replace("CD", "")) {
      s = s.replace("AB", "");
      s = s.replace("CD", "");
    } else break;
  }
  return s.length;
};
let s = "ACBBD";
console.log(minLength(s));
