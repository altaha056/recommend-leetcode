var stringMatching = function (words) {
  const asd = new Set();
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i == j) continue;
      if (words[i].includes(words[j])) {
        asd.add(words[j]);
        continue;
      }
    }
  }
  return Array.from(asd);
};
const words = ["leetcoder", "leetcode", "od", "hamlet", "am"];
console.log(stringMatching(words));
