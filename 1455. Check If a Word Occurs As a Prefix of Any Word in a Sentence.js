var isPrefixOfWord = function (sentence, searchWord) {
  const sl = searchWord.length;
  sentence = sentence.split(" ");
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].slice(0, sl) === searchWord) return i + 1;
  }
  return -1;
};
const sentence = "i love eating burger";
const searchWord = "burg";
console.log(isPrefixOfWord(sentence, searchWord));
