var minimumDeletions = function (s) {
  let res = s.length;
  let a = 0;
  let b = 0;
  for (const c of s) a += c === "a";
  for (const c of s) {
    a -= c === "a";
    res = Math.min(res, a + b);
    b += c === "b";
  }
  return res;
};
const s = "aababbab";
console.log(minimumDeletions(s));
