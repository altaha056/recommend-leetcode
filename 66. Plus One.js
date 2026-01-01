var plusOne = function (digits) {
  if (digits[digits.length - 1] != 9) {
    digits[digits.length - 1] += 1;
    return digits;
  }
  let rem = 1;
  i = digits.length - 1;
  while (rem > 0 && i >= 0) {
    if (digits[i] + 1 > 9) {
      digits[i] = 0;
    } else {
      digits[i] += 1;
      rem--;
    }
    i--;
  }
  if (digits[0] == 0) {
    digits.unshift(1);
  }
  return digits;
};
const digits = [9];
console.log(plusOne(digits));
