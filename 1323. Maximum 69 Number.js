var maximum69Number = function (num) {
  num = num.toString().split("");
  for (let i = 0; i < num.length; i++) {
    console.log(num[i]);

    if (num[i] == "6") {
      num[i] = "9";
      break;
    }
  }

  return parseInt(num.join(""));
};
const num = 9669;

console.log(maximum69Number(num));
