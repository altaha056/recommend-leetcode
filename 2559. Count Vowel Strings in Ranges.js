var vowelStrings = function (words, queries) {
  const vowels = new Set(["a", "i", "u", "e", "o"]);
  let cur = 0;
  for (let i = 0; i < words.length; i++) {
    if (vowels.has(words[i][0]) && vowels.has(words[i][words[i].length - 1])) {
      cur++;
    }
    words[i] = cur;
  }
  for (let i = 0; i < queries.length; i++) {
    queries[i] =
      words[queries[i][1]] -
      (words[queries[i][0] - 1] == undefined ? 0 : words[queries[i][0] - 1]);
  }
  return queries;
};
const words = ["aba", "bcb", "ece", "aa", "e"];
const queries = [
  [0, 2],
  [1, 4],
  [1, 1],
];

console.log(vowelStrings(words, queries));
