var findClosest = function (x, y, z) {
  x = Math.abs(z - x);
  y = Math.abs(z - y);
  if (x == y) return 0;
  return x < y ? 1 : 2;
};
const x = 1;
const y = 5;
const z = 3;
console.log(findClosest(x, y, z));
