var kthCharacter = function (k) {
  let temp = "a";
  while (temp.length < k) {
    let len = temp.length;
    for (let i = 0; i < len; i++) {
      temp += String.fromCharCode(97 + ((temp.charCodeAt(i) + 1 - 97) % 26));
    }
  }
  return temp[k - 1];
};
console.log(kthCharacter(5));
