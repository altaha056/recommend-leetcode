var findEvenNumbers = function (digits) {
  let arr = new Array(10).fill(0);
  let ans = [];
  for (let digit of digits) arr[digit]++;
  for (let i = 1; i < 10; i++) {
    if (arr[i] < 1) continue;
    arr[i]--;
    for (let j = 0; j < 10; j++) {
      if (arr[j] < 1) continue;
      arr[j]--;
      for (let k = 0; k < 10; k += 2) {
        if (arr[k] > 0) {
          ans.push(i * 100 + j * 10 + k);
        }
      }
      arr[j]++;
    }
    arr[i]++;
  }
  return ans;
};
const digits = [2, 1, 3, 0];
console.log(findEvenNumbers(digits));
