var getNoZeroIntegers = function (n) {
  let a = Math.floor(n / 2);
  let b = Math.ceil(n / 2);

  while ((a.toString() + b).includes("0")) {
    a--;
    b++;
  }

  return [a, b];
};
console.log(getNoZeroIntegers(10000));
