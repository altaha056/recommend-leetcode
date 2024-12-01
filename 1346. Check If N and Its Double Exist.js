var checkIfExist = function (arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      map.set(0, map.get(0) == undefined ? 1 : map.get(0) + 1);
    } else {
      map.set(arr[i] / 2, true);
      if (map.get(arr[i])) return true;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      if (map.get(0) >= 2) return true;
    } else {
      if (map.get(arr[i])) return true;
    }
  }
  return false;
};
const arr = [-2, 0, 0, 10, -19, 4, 6, -8];

console.log(checkIfExist(arr));
