var maximumHappinessSum = function (happiness, k) {
  happiness.sort((a, b) => b - a);
  for (let i = 1; i < k; i++) {
    happiness[i] =
      (happiness[i] - i < 0 ? 0 : happiness[i] - i) + happiness[i - 1];
    if (happiness[i] < 0) happiness[i] = 0;
  }
  return happiness[k - 1];
};
const happiness = [12, 1, 42];
const k = 3;
console.log(maximumHappinessSum(happiness, k));
