var nthUglyNumber = function (n) {
  let ans = [1];
  let id2 = 0;
  let id3 = 0;
  let id5 = 0;
  while (ans.length < n) {
    const val2 = ans[id2] * 2;
    const val3 = ans[id3] * 3;
    const val5 = ans[id5] * 5;
    const nextVal = Math.min(val2, val3, val5);
    ans.push(nextVal);
    if (nextVal == val2) id2++;
    if (nextVal == val3) id3++;
    if (nextVal == val5) id5++;
  }
  return ans[ans.length - 1];
};

//2,3,5
//1,
// 2, 3, 4, 5
// 6, 8, 9, 10
// [1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 14]
console.log(nthUglyNumber(11));
