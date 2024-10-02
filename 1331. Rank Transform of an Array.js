var arrayRankTransform = function (arr) {
  let unique = Array.from(new Set(arr)).sort((a, b) => a - b);
  let hashMap = unique.reduce((acc, cur, index) => {
    acc[cur] = index + 1;
    return acc;
  }, {});
  return arr.map((item) => (item = hashMap[item]));
};
let arr = [37, 12, 28, 9, 100, 56, 80, 5, 12, 5, 5, 5, 5];
console.log(arrayRankTransform(arr));
