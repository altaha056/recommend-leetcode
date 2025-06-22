var divideString = function (s, k, fill) {
  let ans = [];
  for (let i = 0; i < s.length; i += k) {
    ans.push(s.slice(i, i + k));
  }
  const lastn = ans[ans.length - 1].length;
  if (lastn < k) {
    for (let i = lastn; i < k; i++) {
      ans[ans.length - 1] += fill;
    }
  }
  return ans;
};
const s = "abcdefghi";
const k = 2;
const fill = "x";
console.log(divideString(s, k, fill));
