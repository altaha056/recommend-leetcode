var luckyNumbers = function (matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let rowMinimums = new Array(rows).fill(Infinity);
  let colMaximums = new Array(cols).fill(-Infinity);

  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    for (let colIndex = 0; colIndex < cols; colIndex++) {
      let element = matrix[rowIndex][colIndex];
      rowMinimums[rowIndex] = Math.min(rowMinimums[rowIndex], element);
      colMaximums[colIndex] = Math.max(colMaximums[colIndex], element);
    }
  }

  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    for (let colIndex = 0; colIndex < cols; colIndex++) {
      let element = matrix[rowIndex][colIndex];
      if (
        element == rowMinimums[rowIndex] &&
        element == colMaximums[colIndex]
      ) {
        return [element];
      }
    }
  }

  console.log(rowMinimums, colMaximums);
  return [];
};

let matrix = [
  [3, 7, 8],
  [9, 11, 13],
  [15, 16, 17],
];

// row = 3, 9, 15
// cols =

console.log(luckyNumbers(matrix));
