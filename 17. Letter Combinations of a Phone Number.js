var letterCombinations = function (digits) {
  if (digits == "") return [];
  const letters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let combinations = [""];

  for (const digit of digits) {
    const newComb = [];
    for (const combination of combinations) {
      for (const letter of letters[digit]) {
        newComb.push(combination + letter);
      }
    }
    combinations = newComb;
  }

  return combinations;
};
console.log(letterCombinations(""));
