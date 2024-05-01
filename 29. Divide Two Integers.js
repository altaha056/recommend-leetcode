var divide = function (dividend, divisor) {
  if (dividend == -2147483648 && divisor == -1) return 2147483647;
  if ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) {
    return Math.floor(dividend / divisor);
  }
  return Math.ceil(dividend / divisor);
};
let dividend = -2147483648;
let divisor = -1;
console.log(divide(dividend, divisor));
