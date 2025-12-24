var minimumBoxes = function (apple, capacity) {
  apple = apple.reduce((a, b) => a + b, 0);
  capacity.sort((a, b) => b - a);
  let ans = 0;
  for (const a of capacity) {
    apple -= a;
    ans += 1;
    if (apple <= 0) return ans;
  }
  return ans;
};
const apple = [1, 3, 2];
const capacity = [4, 3, 1, 5, 2];
console.log(minimumBoxes(apple, capacity));
