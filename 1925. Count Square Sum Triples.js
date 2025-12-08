var countTriples = function (n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      const sumSqr = i * i + j * j;
      const c = Math.floor(Math.sqrt(sumSqr));
      if (c <= n && c * c === sumSqr) ans++;
    }
  }
  return ans;
};
console.log(countTriples(5));
