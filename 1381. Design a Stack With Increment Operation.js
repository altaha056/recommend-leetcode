class CustomStack {
  constructor(maxSize) {
    this.stack = [];
    this.maxSize = maxSize;
  }

  push(x) {
    if (this.stack.length < this.maxSize) this.stack.push(x);
  }

  pop() {
    if (this.stack.length > 0) return this.stack.pop();
    return -1;
  }

  increment(k, val) {
    let iterator = Math.min(k, this.stack.length);
    for (let i = 0; i < iterator; i++) {
      this.stack[i] += val;
    }
  }
}
