/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n == 1) return true;
  while (n > 2) n /= 2;
  return n == 2;
};
console.log(isPowerOfTwo(8));
