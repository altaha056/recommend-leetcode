var possibleStringCount = function (word) {
  let ans = word.length;
  for (let i = 1; i < word.length; i++) {
    if (word[i] != word[i - 1]) ans--;
  }
  return ans;
};
const word = "abbcccc";
console.log(possibleStringCount(word));
