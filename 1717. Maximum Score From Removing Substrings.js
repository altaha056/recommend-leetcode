// ab -> x points
// ba -> y points

var maximumGain = function (s, x, y) {
  let maxScore = Math.max(x, y);
  let minScore = Math.min(x, y);
  let firstPair = x >= y ? "ab" : "ba";
  let secondPair = x >= y ? "ba" : "ab";

  let processStack = (stack, pair, score) => {
    let tempStack = [];
    let points = 0;
    for (let char of stack) {
      if (
        tempStack.length > 0 &&
        tempStack[tempStack.length - 1] === pair[0] &&
        char === pair[1]
      ) {
        tempStack.pop();
        points += score;
      } else {
        tempStack.push(char);
      }
    }
    return [tempStack, points];
  };

  let [remaining, points1] = processStack(s, firstPair, maxScore);
  let [_, points2] = processStack(remaining, secondPair, minScore);

  return points1 + points2;
};

let s = "aabbaaxybbaabb";
let x = 5;
let y = 4;
console.log(maximumGain(s, x, y));
