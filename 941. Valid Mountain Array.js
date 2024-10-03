var validMountainArray = function (arr) {
  let increase = false;
  let decrease = false;
  if (arr.length < 3) return false;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == arr[i - 1]) return false;
    if (arr[i] > arr[i - 1] && increase == false) increase = true;
    if (arr[i] < arr[i - 1] && decrease == false) decrease = true;
    if (arr[i] > arr[i - 1] && decrease == true) return false;
  }
  if (increase == true && decrease == true) return true;
  return false;
};
let arr = [0, 3, 2, 1];
console.log(validMountainArray(arr));
