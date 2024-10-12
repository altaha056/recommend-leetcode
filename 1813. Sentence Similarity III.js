var areSentencesSimilar = function (sentence1, sentence2) {
  sentence1 = sentence1.split(" ");
  sentence2 = sentence2.split(" ");
  if (sentence1.length < sentence2.length) {
    [sentence1, sentence2] = [sentence2, sentence1];
  }
  let start = 0;
  let end = 0;
  let s1n = sentence1.length;
  let s2n = sentence2.length;

  while (start < s2n && sentence1[start] == sentence2[start]) start++;
  while (end < s2n && sentence1[s1n - 1 - end] == sentence2[s2n - 1 - end])
    end++;
  return start + end >= s2n;
};
const sentence1 = "My name is Haley";
const sentence2 = "My Haley";
console.log(areSentencesSimilar(sentence1, sentence2));
