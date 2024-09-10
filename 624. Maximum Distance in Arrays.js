var maxDistance = function (arrays) {
  let min = arrays[0][0];
  let max = arrays[0][arrays[0].length - 1];
  let maxDistance = 0;
  for (let i = 1; i < arrays.length; i++) {
    let curMin = arrays[i][0];
    let curMax = arrays[i][arrays[i].length - 1];

    maxDistance = Math.max(max, Math.abs(max - curMin));
    maxDistance = Math.max(max, Math.abs(curMax - min));

    min = Math.min(min, curMin);
    max = Math.max(max, curMax);
  }
  return maxDistance;
};
let arrays = [
  [7],
  [49],
  [89],
  [5],
  [24],
  [31],
  [21],
  [31],
  [23],
  [62],
  [9],
  [14],
  [79],
  [19],
  [66],
  [53],
  [85],
  [15],
  [65],
];
console.log(maxDistance(arrays));
