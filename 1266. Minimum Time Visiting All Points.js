  var minTimeToVisitAllPoints = function (points) {
    let ans = 0;
    for (let i = 1; i < points.length; i++) {
      ans += Math.max(
        Math.abs(points[i][0] - points[i - 1][0]),
        Math.abs(points[i][1] - points[i - 1][1])
      );
    }
    return ans;
  };

const points = [
  [1, 1],
  [3, 4],
  [-1, 0],
];
console.log(minTimeToVisitAllPoints(points));
