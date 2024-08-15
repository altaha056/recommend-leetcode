var lemonadeChange = function (bills) {
  let five = 0;
  let ten = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] == 5) five++;
    if (bills[i] == 10) {
      five--;
      ten++;
    }
    if (bills[i] == 20) {
      ten >= 1 ? ten-- : (five -= 2);
      five--;
    }
    if (five < 0 || ten < 0) return false;
  }
  return true;
};
let bills = [5, 5, 10, 20, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 5, 5, 20, 5, 20, 5];

console.log(lemonadeChange(bills));
