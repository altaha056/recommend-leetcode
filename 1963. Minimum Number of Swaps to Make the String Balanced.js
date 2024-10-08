var minSwaps = function (s) {
  let count = 0;
  for (let ch of s) {
    if (ch === "[") {
      count++;
    } else {
      if (count > 0) {
        count--;
      }
    }
  }
  console.log(count);

  return Math.floor((count + 1) / 2);
};
console.log(minSwaps("[]"));
