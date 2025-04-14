var countGoodTriplets = function (arr, a, b, c) {
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) <= a) {
        for (let k = j + 1; k < arr.length; k++) {
          if (
            Math.abs(arr[j] - arr[k]) <= b &&
            Math.abs(arr[i] - arr[k]) <= c
          ) {
            ans++;
          }
        }
      }
    }
  }
  return ans;
};
const arr = [3, 0, 1, 1, 9, 7];
const a = 7;
const b = 2;
const c = 3;
console.log(countGoodTriplets(arr, a, b, c));
