var successfulPairs = function (spells, potions, success) {
  let result = [];
  potions.sort((a, b) => a - b);
  for (let i = 0; i < spells.length; i++) {
    let left = 0;
    let right = potions.length - 1;
    while (left <= right) {
      let mid = Math.floor((left+right) / 2);
      if (potions[mid] * spells[i] >= success) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
      console.log(left, right, mid);
    }
    result.push(potions.length - left);
  }
  return result;
};

const spells = [5, 1, 3];
const potions = [1, 2, 3, 4, 5];
const success = 7;

console.log(successfulPairs(spells, potions, success));
