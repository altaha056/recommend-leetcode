var minOperations = function (s) {
  let count0 = 0;
  let count1 = 0;
  for (let i = 0; i < s.length; i++) {
    if (i % 2 == 0) {
      if (s[i] == "1") count0++;
      else count1++;
    } else {
      if (s[i] == "1") count1++;
      else count0++;
    }
  }
  return Math.min(count0, count1);
};
const s = "1111";
console.log(minOperations(s));
