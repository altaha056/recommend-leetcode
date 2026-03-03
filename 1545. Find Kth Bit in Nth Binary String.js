var findKthBit = function (n, k) {
  if (n === 1) return "0";

  const mid = 1 << (n - 1);

  if (k === mid) return "1";

  if (k < mid) {
    return findKthBit(n - 1, k);
  } else {
    const mirrorPos = 2 * mid - k;
    const bit = findKthBit(n - 1, mirrorPos);
    return bit === "0" ? "1" : "0";
  }
};
console.log(findKthBit(3, 7));
