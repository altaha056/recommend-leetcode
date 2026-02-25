var sortByBits = function (arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    const count = arr[i].toString(2).split("0").join("").length;
    if (obj[count]) {
      obj[count].push(arr[i]);
    } else {
      obj[count] = [arr[i]];
    }
  }
  return Object.keys(obj)
    .sort((a, b) => a - b)
    .reduce((a, k) => a.concat(obj[k].sort((a, b) => a - b)), []);
};
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(sortByBits(arr));
