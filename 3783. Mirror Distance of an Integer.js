var mirrorDistance = function (n) {
  const reverseNum = (x) => {
    let rev = 0;
    while (x > 0) {
      rev = rev * 10 + (x % 10);
      x = Math.floor(x / 10);
    }
    return rev;
  };
  return Math.abs(n - reverseNum(n));
};
console.log(mirrorDistance(25));
