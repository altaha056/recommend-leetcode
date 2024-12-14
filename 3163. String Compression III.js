var compressedString = function (word) {
  let ans = [1, word[0]];
  for (let i = 1; i < word.length; i++) {
    if (word[i] === ans[ans.length - 1]) {
      ans[ans.length - 2]++;
      if (ans[ans.length - 2] > 9) {
        ans[ans.length - 2]--;
        ans.push(1, word[i]);
      }
    } else {
      ans.push(1, word[i]);
    }
  }
  return ans.join("");
};
const word = "aaaaaaaaaaaaaaaabcde";
console.log(compressedString(word));
