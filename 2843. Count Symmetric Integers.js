var countSymmetricIntegers = function (low, high) {
  let ans = 0;
  for (let i = low; i <= high; i++) {
    let s = i.toString();
    if (s.length % 2 == 1) continue;
    let a = 0;
    let b = s.length - 1;
    let sa = 0;
    let sb = 0;
    while (a < b) {
      sa += parseInt(s[a]);
      sb += parseInt(s[b]);
      a++;
      b--;
    }
    if (sa == sb) ans++;
  }
  return ans;
};
const low = 1;
const high = 100;
console.log(countSymmetricIntegers(low, high));
