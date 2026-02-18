var hasAlternatingBits = function (n) {
  n = n.toString(2);
  for (let i = 1; i < n.length; i++) {
    if (n[i] == n[i - 1]) return false;
  }
  return true;
};
console.log(hasAlternatingBits(7));
