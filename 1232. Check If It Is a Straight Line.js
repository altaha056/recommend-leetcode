var checkStraightLine = function (coordinates) {
  if (coordinates.length == 2) return true;
  let [x1, y1] = coordinates[0];
  let [x2, y2] = coordinates[1];
  for (let i = 0; i < coordinates.length; i++) {
    let [x, y] = coordinates[i];
    if ((y2 - y1) * (x - x1) - (x2 - x1) * (y - y1) != 0) return false;
  }
  return true;
};
let coordinates = [
  [0, 1],
  [1, 3],
  [-4, -7],
  [5, 11],
];
console.log(checkStraightLine(coordinates));
