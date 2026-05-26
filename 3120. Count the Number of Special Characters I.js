var numberOfSpecialChars = function (word) {
  let arr = new Array(52);
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    arr[word.charCodeAt(i) - 65] = true;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == true && arr[i + 32] == true) {
      count++;
    }
  }
  return count;
};
const word = "aaAbcBC";
console.log(numberOfSpecialChars(word));
