var findLucky = function (arr) {
  let asd = {};
  for (let i = 0; i < arr.length; i++) {
    if (asd[arr[i]]) {
      asd[arr[i]]++;
    } else asd[arr[i]] = 1;
  }
  asd = Object.entries(asd);
  asd.sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < asd.length; i++) {
    if (asd[i][0] == asd[i][1]) return asd[i][1];
  }
  return -1;
};
const arr = [1, 2, 2, 3, 3, 3];
console.log(findLucky(arr));
