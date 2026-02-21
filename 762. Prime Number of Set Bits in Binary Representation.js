var countPrimeSetBits = function (left, right) {
  function isPrimeSimple(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    const limit = Math.floor(Math.sqrt(n));
    for (let i = 3; i <= limit; i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }
  let ans = 0;
  for (let i = left; i <= right; i++) {
    if (isPrimeSimple(i.toString(2).split("0").join("").length)) ans++;
  }
  return ans;
};
console.log(countPrimeSetBits(10, 15));
