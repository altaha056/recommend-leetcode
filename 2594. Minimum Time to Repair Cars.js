var repairCars = function (ranks, cars) {
  let left = 1;
  let right = Math.min(...ranks) * cars * cars;
  function canRepairAll(time) {
    let totalCarRepaired = 0;
    for (let rank of ranks) {
      totalCarRepaired += Math.floor(Math.sqrt(time / rank));
      if (totalCarRepaired >= cars) return true;
    }
    return false;
  }

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (canRepairAll(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
const ranks = [4, 2, 3, 1];
const cars = 10;
console.log(repairCars(ranks, cars));
