var countOdds = function (low, high) {
  if (high % 2 == 1 && low % 2 == 1) return (high - low) / 2 + 1;
  return Math.ceil((high - low) / 2);
};
const low = 4;
const high = 10;
console.log(countOdds(low, high));
// 3 - 9 = 6/2 = 3 -> 4
// 4 - 10 = 6/2 = 3 -> 3
// 3 - 10 = 7/2 = 3 -> 4
// 3 - 8 = 5/2 = 2 -> 3
// 4 - 9 = 5/2 = 2 -> 3
// 1 - 9 => 8/2 = 4 -> 5
// 2 - 9 => 7/2 = 3 -> 4

// even & even = / 2
// odd & odd = / 2 + 1
// odd & even = / 2 + round up
