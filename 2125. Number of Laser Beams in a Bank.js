var numberOfBeams = function (bank) {
  let ans = 0;
  let prev = 0;
  for (let i = 0; i < bank.length; i++) {
    const cur = bank[i].split("1").length - 1;
    if (cur > 0) {
      ans += prev * cur;
      prev = cur;
    }
  }
  return ans;
};
const bank = ["000", "111", "000"];
console.log(numberOfBeams(bank));
