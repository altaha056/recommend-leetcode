var fractionAddition = function (expression) {
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
  let fractions = expression.match(/[+-]?\d+\/\d+/g);
  let numerator = 0;
  let denominator = 1;
  fractions.forEach((fraction) => {
    let [num, den] = fraction.split("/").map(Number);
    numerator = numerator * den + num * denominator;
    denominator *= den;
    let commonDivisor = gcd(Math.abs(numerator), denominator);
    numerator /= commonDivisor;
    denominator /= commonDivisor;
  });

  return `${numerator}/${denominator}`;
};

console.log(fractionAddition("-1/2+1/2+1/3"));
