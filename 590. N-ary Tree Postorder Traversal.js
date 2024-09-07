class _Node {
  constructor(val, children) {
    this.val = val;
    this.children = children;
  }
}

var postorder = function (root) {
  const res = [];
  const stack = [root];
  while (stack.length) {
    const curr = stack.pop();
    if (!curr) continue;
    res.push(curr.val);
    stack.push(...curr.children);
  }
  return res.reverse();
};

console.log(postorder(root));
