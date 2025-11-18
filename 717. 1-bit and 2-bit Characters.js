var isOneBitCharacter = function (bits) {
  let i = 0;
  let singleDigit = 0;
  while (i < bits.length) {
    if (bits[i] == 0) {
      ++i;
      singleDigit = 1;
      continue;
    }
    if (bits[i] == 1 && bits[i + 1] == 0) {
      i += 2;
      singleDigit = 0;
      continue;
    }
    if (bits[i] == 1 && bits[i + 1] == 1) {
      i += 2;
      singleDigit = 0;
      continue;
    }
    return false;
  }
  if (singleDigit == 1) return true;
  return false;
};

const bits = [1, 0, 0];

console.log(isOneBitCharacter(bits));
