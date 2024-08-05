var kthDistinct = function (arr, k) {
  let count = {};
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] ? count[arr[i]]++ : (count[arr[i]] = 1);
  }
  for (const key in count) {
    if (count[key] == 1) {
      if (k == 1) return key;
      k--;
    }
  }
  return "";
};

let arr = ["d", "b", "c", "b", "c", "a"];
let k = 2;
console.log(kthDistinct(arr, k));
