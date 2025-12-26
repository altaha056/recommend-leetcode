var bestClosingTime = function (customers) {
  let curmin = customers.split("N").join("").length;
  let min = curmin;
  let ans = 0;
  for (let i = 0; i <= customers.length; i++) {
    if (customers[i] == "Y") {
      curmin--;
    } else curmin++;
    if (curmin < min) {
      min = curmin;
      ans = i + 1;
    }
  }
  return ans;
};
const customers = "YYNY";
console.log(bestClosingTime(customers));

// Y N Y N N N Y Y Y
// Y = 5
// N = 4
