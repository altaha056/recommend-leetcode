var numWaterBottles = function (numBottles, numExchange) {
  let ans = numBottles;
  while (numBottles >= numExchange) {
    const curDrink = Math.floor(numBottles / numExchange);
    ans += curDrink;
    numBottles = curDrink + (numBottles % numExchange);
  }
  return ans;
};
const numBottles = 9;
const numExchange = 3;
console.log(numWaterBottles(numBottles, numExchange));
