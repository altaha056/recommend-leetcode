var sumZero = function (n) {
  let ans = [];
  for (let i = 1; i <= n / 2; i++) {
    ans.push(i);
    ans.push(0 - i);
  }
  if (n % 2 == 1) ans.push(0);
  return ans;
};
console.log(sumZero(4));
