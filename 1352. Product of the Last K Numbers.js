class ProductOfNumbers {
  constructor() {
    this.arr = [];
  }
  add(num) {
    this.arr.push(num);
  }
  getProduct(k) {
    if (k == 0) return 0;
    k--;
    let ans = this.arr[this.arr.length - 1];
    for (let i = this.arr.length - 2; k > 0; i--) {
      ans *= this.arr[i];
      k--;
    }
    return ans;
  }
}

var obj = new ProductOfNumbers();

obj.add(2);
obj.add(2);
obj.add(2);
obj.add(2);
obj.add(2);
obj.add(2);
obj.add(2);
obj.add(2);
obj.add(2);
obj.add(2);
obj.add(2);

var param_2 = obj.getProduct(2);
console.log(param_2);
