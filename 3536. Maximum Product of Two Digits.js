var maxProduct = function (n) {
  n = n
    .toString()
    .split("")
    .sort((a, b) => b - a);
  return n[0] * n[1];
};
console.log(maxProduct(267));
