var maxCount = function (banned, n, maxSum) {
  const set = new Set(banned);
  let count = 0;
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (!set.has(i) && sum + i <= maxSum) {
      count++;
      sum += i;
    }
  }
  return count;
};
const banned = [1, 6, 5];
const n = 5;
const maxSum = 6;
console.log(maxCount(banned, n, maxSum));
