var minBitFlips = function (start, goal) {
  let xor = start ^ goal;
  let count = 0;

  while (xor > 0) {
    count += xor & 1;
    xor >>= 1;
  }
  return count;
};
let start = 10;
let goal = 7;

console.log(minBitFlips(start, goal));
