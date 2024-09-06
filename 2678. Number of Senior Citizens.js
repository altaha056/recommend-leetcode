var countSeniors = function (details) {
  let count = 0;
  details.map((x) => {
    if (x[11] + x[12] > 60) count++;
  });
  return count;
};
let details = [
  "5612624052M0130",
  "5378802576M6424",
  "5447619845F0171",
  "2941701174O9078",
];
console.log(countSeniors(details));
