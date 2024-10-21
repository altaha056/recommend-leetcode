var maxUniqueSplit = function (s) {
  let res = 1;
  let strings = new Set();

  function search(s) {
    if (!strings.has(s)) {
      strings.add(s);
      res = Math.max(strings.size, res);

      console.log("1,", strings);
      strings.delete(s);
      console.log("2,", strings);
    }
    for (let i = 1; i < s.length; i++) {
      const sub = s.substring(0, i);
      if (strings.has(sub)) continue;
      strings.add(sub);
      search(s.substring(i));
      console.log("3,", strings);
      strings.delete(sub);
      console.log("4,", strings);
    }
  }
  search(s);
  return res;
};
let s = "ababccc";
console.log(maxUniqueSplit(s));
