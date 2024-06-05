var multiply = function (num1, num2) {
  let m = num1.length,
    n = num2.length;
  let result = Array(m + n).fill(0);

  // Iterate over each digit in num1 and num2
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      let mul = (num1[i] - "0") * (num2[j] - "0");
      let p1 = i + j,
        p2 = i + j + 1;
      let sum = mul + result[p2];

      result[p1] += Math.floor(sum / 10);
      result[p2] = sum % 10;
    }
  }

  // Convert result array to a string
  let str = result.join("");
  while (str[0] == "0" && str.length > 1) {
    str = str.substring(1);
  }

  return str;
};

let num1 = "999";
let num2 = "3";
console.log(multiply(num1, num2)); // Output should be "2997"
