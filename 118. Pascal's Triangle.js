var generate = function (numRows) {
  let ans = [];
  for (let i = 1; i <= numRows; i++) {
    let cur = new Array(i).fill(1);
    for (let j = 1; j < i - 1; j++) {
      cur[j] = ans[i - 2][j] + ans[i - 2][j - 1];
    }
    ans.push(cur);
  }
  return ans;
};

console.log(generate(5));

let test = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];
