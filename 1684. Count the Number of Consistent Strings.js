var countConsistentStrings = function (allowed, words) {
  let set = new Set(allowed);
  count = 0;
  for (let i = 0; i < words.length; i++) {
    words[i].split("").every((l) => set.has(l)) ? count++ : count;
  }
  return count;
};
let allowed = "ab";
let words = ["ad", "bd", "aaab", "baa", "badab"];
console.log(countConsistentStrings(allowed, words));
