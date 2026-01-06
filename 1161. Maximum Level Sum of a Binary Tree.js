class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var maxLevelSum = function (root) {
  if (root == null) return 0;
  let maxLevel = 1;
  let max = -Infinity;
  let level = 1;
  let queue = [root];
  while (queue.length > 0) {
    const size = queue.length;
    let cur = 0;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      cur += node.val;
      if (node.left != null) queue.push(node.left);
      if (node.right != null) queue.push(node.right);
    }
    if (cur > max) {
      max = cur;
      maxLevel = level;
    }
    level++;
  }
  return maxLevel;
};

let t = new TreeNode(
  1,
  new TreeNode(7, new TreeNode(7, null, null), new TreeNode(-8, null, null)),
  new TreeNode(0, null, null)
);
console.log(maxLevelSum(t));
