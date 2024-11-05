class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var minDepth = function (root) {
  if (root == null) return 0;
  if (root.left == null && root.right == null) return 1;
  if (root.left == null) return 1 + minDepth(root.right);
  if (root.right == null) return 1 + minDepth(root.left);
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

let root = new TreeNode(3, 9, new TreeNode(20, 15, 7));
console.log(minDepth(root));
