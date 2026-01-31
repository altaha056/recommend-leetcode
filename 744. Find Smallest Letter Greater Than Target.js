var nextGreatestLetter = function (letters, target) {
  const first = letters[0]
  for (let i = 0; i < letters.length; i++) {
    letters[i] = letters[i].charCodeAt(0);
  }

  letters.sort((a, b) => a - b);
  const tar = target.charCodeAt(0);
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] > tar) return String.fromCharCode(letters[i]);
  }
  return first;
};

const letters = ["z", "c", "f", "a", "j"];
const target = "a";
console.log(nextGreatestLetter(letters, target));
