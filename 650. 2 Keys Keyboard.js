var minSteps = function (n) {
  if (n == 1) return 0;
  let steps = 0;
  let factor = 2;
  while (n > 1) {
    while (n % factor == 0) {
      steps += factor;
      n = Math.floor(n / factor);
    }
    factor++;
  }
  return steps;
};
// There is only one character 'A' on the screen of a notepad. You can perform one of two operations on this notepad for each step:

// Copy All: You can copy all the characters present on the screen (a partial copy is not allowed).
// Paste: You can paste the characters which are copied last time.
// Given an integer n, return the minimum number of operations to get the character 'A' exactly n times on the screen.
// 1 = 0
// 2 = 2
// 3 = 3
// 4 = 4
// 5 = 5
// 6 = 5
console.log(minSteps(6));
