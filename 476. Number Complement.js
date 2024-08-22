var findComplement = function (num) {
  num = num.toString(2);
  let result = "";
  for (let i = 0; i < num.length; i++) {
    if (num[i] == 0) {
      result += "1";
    } else result += "0";
  }
  return parseInt(result, 2);
};
console.log(findComplement(5));
