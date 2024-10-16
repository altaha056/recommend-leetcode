var longestDiverseString = function (a, b, c) {
  const q = [
    { char: "a", count: a },
    { char: "b", count: b },
    { char: "c", count: c },
  ];
  let ans = "";
  const addChar = (c) => {
    ans += c.char;
    c.count--;
  };
  while (true) {
    q.sort((a, b) => b.count - a.count);
    if (q[0].count == 0) break;
    if (
      ans.length >= 2 &&
      ans[ans.length - 1] == q[0].char &&
      ans[ans.length - 2] == q[0].char
    ) {
      if (q[1].count == 0) break;
      addChar(q[1]);
    } else {
      addChar(q[0]);
    }
  }
  return ans;
};
let a = 7;
let b = 1;
let c = 0;
console.log(longestDiverseString(a, b, c));
