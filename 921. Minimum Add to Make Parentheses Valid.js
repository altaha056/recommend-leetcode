var minAddToMakeValid = function (s) {
  let asd = { a: 0, b: 0 };
  for (let ch of s) {
    if (ch == "(") {
      asd.a++;
    } else {
      if (asd.a > 0) {
        asd.a--;
      } else asd.b++;
    }
  }
  return asd.a + asd.b;
};

console.log(minAddToMakeValid("(())("));
