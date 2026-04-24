var furthestDistanceFromOrigin = function (moves) {
  let lr = 0;
  let us = 0;
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "L") {
      lr--;
    } else if (moves[i] === "R") {
      lr++;
    } else us++;
  }
  return Math.abs(lr) + us;
};
const moves = "L_RL__R";
console.log(furthestDistanceFromOrigin(moves));
