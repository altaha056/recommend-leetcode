var minPartitions = function (n) {
  let max = 0;
  for (let i = 0; i < n.length; i++) {
    let digit = n[i] - "0";
    if (digit > max) max = digit;
    if (max == 9) break;
  }
  return max;
};
console.log(minPartitions("32"));
