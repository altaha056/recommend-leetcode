var judgeCircle = function (moves) {
  let horizontal = 0;
  let vertical = 0;
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "U") {
      vertical++;
      continue;
    }
    if (moves[i] === "D") {
      vertical--;
      continue;
    }
    if (moves[i] === "R") {
      horizontal++;
      continue;
    }
    if (moves[i] === "L") horizontal--;
  }
  return horizontal === 0 && vertical === 0;
};
const moves = "UD";
console.log(judgeCircle(moves));
