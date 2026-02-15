var addBinary = function (a, b) {
  let ans = [];
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  while (carry > 0 || i >= 0 || j >= 0) {
    let sum = carry;
    if (i >= 0) {
      sum += a[i] - "0";
      i--;
    }
    if (j >= 0) {
      sum += b[j] - "0";
      j--;
    }
    ans.push(sum % 2);
    carry = Math.floor(sum / 2);
  }
  return ans.reverse().join("");
};
const a = "1100";
const b = "1001";
console.log(addBinary(a, b));
