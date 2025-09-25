var minimumTotal = function (triangle) {
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      let left = triangle[i - 1][j - 1];
      let top = triangle[i - 1][j];
      if (left == undefined) {
        triangle[i][j] += top;
        continue;
      }
      if (top == undefined) {
        triangle[i][j] += left;
        continue;
      }
      triangle[i][j] += Math.min(top, left);
    }
  }
  return Math.min(...triangle[triangle.length - 1]);
};
const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
console.log(minimumTotal(triangle));
// 2
// 3 4
// 6 5 7
// 4 1 8 3
