/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let ans = [];
  numRows = rowIndex + 1;
  for (let i = 1; i <= numRows; i++) {
    let cur = new Array(i).fill(1);
    for (let j = 1; j < i - 1; j++) {
      cur[j] = ans[i - 2][j] + ans[i - 2][j - 1];
    }
    ans.push(cur);
  }
  return ans[rowIndex];
};

console.log(getRow(3));
