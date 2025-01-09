var prefixCount = function (words, pref) {
  const n = pref.length;
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].substring(0, n) == pref) count++;
  }
  return count;
};
const words = ["pay", "attention", "practice", "attend"];
const pref = "at";
console.log(prefixCount(words, pref));
