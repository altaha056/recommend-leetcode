var longestPalindrome = function (s) {
  if (s.length === 0) return "";
  let longestPalindromeIndices = [0, 0];
  for (let i = 0; i < s.length; ++i) {
    let currentIndices = expandAroundCenter(s, i, i);
    if (
      currentIndices[1] - currentIndices[0] >
      longestPalindromeIndices[1] - longestPalindromeIndices[0]
    ) {
      longestPalindromeIndices = currentIndices;
    }
    if (i + 1 < s.length && s[i] === s[i + 1]) {
      let evenIndices = expandAroundCenter(s, i, i + 1);
      if (
        evenIndices[1] - evenIndices[0] >
        longestPalindromeIndices[1] - longestPalindromeIndices[0]
      ) {
        longestPalindromeIndices = evenIndices;
      }
    }
  }

  return s.slice(longestPalindromeIndices[0], longestPalindromeIndices[1] + 1);
};

function expandAroundCenter(s, i, j) {
  while (i >= 0 && j < s.length && s[i] === s[j]) {
    i--;
    j++;
  }
  return [i + 1, j - 1];
}

let s = "babad";

console.log(longestPalindrome(s));
