var minExtraChar = function (s, dictionary) {
  let dict = new Set(dictionary);
  let n = s.length;
  let dp = new Array(n + 1).fill(n);
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      let sub = s.substring(j, i);
      if (dict.has(sub)) {
        dp[i] = Math.min(dp[i], dp[j]);
        console.log(i, j, dp[i]);
      }
    }
    dp[i] = Math.min(dp[i], dp[i - 1] + 1);
  }
  return dp[n];
};
let s = "sayhelloworld";
let dictionary = ["hello", "world"];
console.log(minExtraChar(s, dictionary));
