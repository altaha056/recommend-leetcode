class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var isBalanced = function (root) {
  return dfs(root) !== -1;
};

function dfs(node) {
  if (!node) return 0;

  let left = dfs(node.left);
  if (left === -1) return -1;

  let right = dfs(node.right);
  if (right === -1) return -1;

  if (Math.abs(left - right) > 1) return -1;

  return 1 + (left > right ? left : right);
}

const root = new TreeNode(
  3,
  new TreeNode(9, null, null),
  new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null)),
);
console.log(isBalanced(root));
