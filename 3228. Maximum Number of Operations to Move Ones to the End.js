var maxOperations = function (s) {
  let ans = 0;
  let one = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "1") {
      if (s[i - 1] == "0") {
        ans += one;
      }
      one++;
    }
  }
  if (s[s.length - 1] == "0") ans += one;
  return ans;
};
console.log(maxOperations("10000001101000"));

// 1,11,1
// 1,,111
// ,,1111
