var shortestPalindrome = function (s) {
  let count = kmp(s.split("").reverse().join(""), s);
  return s.slice(count).split("").reverse().join("") + s;
};
var kmp = function (txt, patt) {
  let newString = patt + "#" + txt;
  let pi = new Array(newString.length).fill(0);
  let i = 1;
  let k = 0;
  while (i < newString.length) {
    console.log("I", i, newString[i], "K", k, newString[k]);

    if (newString[i] == newString[k]) {
      k++;
      pi[i] = k;
      i++;
    } else {
      if (k > 0) {
        k = pi[k - 1];
      } else {
        pi[i] = 0;
        i++;
      }
    }
    console.log(pi);
  }
  return pi[newString.length - 1];
};
s = "aacecaaab";
console.log(shortestPalindrome(s));
