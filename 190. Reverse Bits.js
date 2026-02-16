var reverseBits = function (n) {
  n = n.toString(2).split("").reverse().join("");
  return parseInt(n + Array(33 - n.length).join("0"), 2);
};
const n = 43261596;
console.log(reverseBits(n));
