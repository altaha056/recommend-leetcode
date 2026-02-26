var numSteps = function (s) {
  let ans = 0;
  let carry = 0;
  for (let i = s.length - 1; i > 0; i--) {
    const bit = Number(s[i]) + carry;
    if (bit === 1) {
      ans += 2;
      carry = 1;
    } else {
      ans += 1;
    }
  }
  return ans + carry;
};
const s = "1";
console.log(numSteps(s));
