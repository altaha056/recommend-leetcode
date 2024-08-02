var exist = function (board, word) {
  let count = 0;
  let findStart = (start) => {
    for (let i = start[0]; i < board.length; i++) {
      for (let j = start[1]; j < board[i].length; j++) {
        console.log(board[i][j]);
        if (board[i][j] == word[0]) {
          return [i, j];
        }
      }
    }
  };
  let start = findStart([0, 0]);
  let curPos = start;
  console.log(start, curPos);
  return count == word.length - 1;
};
let board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
let word = "FCCBASAD";

console.log(exist(board, word));
