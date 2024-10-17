var uncommonFromSentences = function (s1, s2) {
  const cur = {};
  s1 = s1.split(" ").concat(s2.split(" "));

  for (let i = 0; i < s1.length; i++) {
    if (cur[s1[i]]) {
      cur[s1[i]]++;
    } else cur[s1[i]] = 1;
  }
  const ans = [];
  for (let [key, value] of Object.entries(cur)) {
    if (value < 2) ans.push(key);
  }
  return ans;
};
let s1 = "this apple is sweet";
let s2 = "this apple is sour";
console.log(uncommonFromSentences(s1, s2));
