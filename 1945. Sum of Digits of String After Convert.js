var getLucky = function (s, k) {
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    const curInt = s.charCodeAt(i) - 96;
    const curStr = curInt.toString();
    if (curStr.length > 1) {
      ans += parseInt(curStr[0]);
      ans += parseInt(curStr[1]);
      continue;
    }
    ans += curInt;
  }
  for (let j = 1; j < k; j++) {
    ans = ans.toString();
    let cur = 0;
    for (let i = 0; i < ans.length; i++) {
      cur += parseInt(ans[i]);
    }
    ans = cur;
  }
  return ans;
};
let s = "iiii";
let k = 1;
console.log(getLucky(s, k));
