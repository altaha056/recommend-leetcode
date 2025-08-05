var numOfUnplacedFruits = function (fruits, baskets) {
  let ans = fruits.length;
  for (let i = 0; i < baskets.length; i++) {
    const found = baskets.findIndex((x) => x >= fruits[i]);
    if (found != -1) {
      ans--;
      baskets[found] = null;
    }
  }
  return ans;
};
const fruits = [4, 2, 5];
const baskets = [3, 5, 4];
console.log(numOfUnplacedFruits(fruits, baskets));
