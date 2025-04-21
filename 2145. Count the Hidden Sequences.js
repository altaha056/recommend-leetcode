var numberOfArrays = function (differences, lower, upper) {
  let sum = 0;
  let mini = 0;
  let maxi = 0;

  for (let i = 0; i < differences.length; i++) {
    sum += differences[i];
    mini = Math.min(mini, sum);
    maxi = Math.max(maxi, sum);
    console.log("mini: ", mini, "maxi: ", maxi, "sum: ", sum);
  }
  const validLow = lower - mini;
  const validHigh = upper - maxi;
  console.log("validlow: ", validLow, "validhigh: ", validHigh);

  return Math.max(0, validHigh - validLow + 1);
};
const differences = [1, -3, 4];
const lower = 1;
const upper = 6;
console.log(numberOfArrays(differences, lower, upper));
