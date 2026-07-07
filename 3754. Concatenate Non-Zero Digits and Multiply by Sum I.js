var sumAndMultiply = function (n) {
  let y = n.toString();
  let sum = 0;
  let st = 0;
  for (let ch of y) {
    if (ch != 0) {
      let digit = Number(ch);
      st = st * 10 + digit;
      sum += digit;
    }
  }
  return sum * st;
};
console.log(sumAndMultiply(10203004));
