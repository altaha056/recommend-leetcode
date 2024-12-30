var countGoodStrings = function (low, high, zero, one) {
  const mod = 1e9 + 7;
  const dp = new Int32Array(high + 1);
  let res = 0;
  dp[0] = 1;
  for (let i = 1; i <= high; i++) {
    if (i >= zero) dp[i] = dp[i - zero] % mod;
    if (i >= one) dp[i] = (dp[i] + dp[i - one]) % mod;
    if (i >= low) res = (res + dp[i]) % mod;
  }
  console.log(dp);

  return res;
};
const low = 200;
const high = 200;
const zero = 10;
const one = 1;
console.log(countGoodStrings(low, high, zero, one));
