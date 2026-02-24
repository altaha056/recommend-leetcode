class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
var sumRootToLeaf = function (root) {
  const stl = (node, path) => {
    if (!node) return 0;
    const newPath = path + node.val;
    if (!node.left && !node.right) return parseInt(newPath, 2);
    return (
      stl(node.left, newPath) +
      stl(node.right, newPath)
    );
  };
  return stl(root, "");
};

const root = new TreeNode(
  1,
  new TreeNode(0, new TreeNode(0, null, null), new TreeNode(1, null, null)),
  new TreeNode(1, new TreeNode(0, null, null), new TreeNode(1, null, null)),
);
console.log(sumRootToLeaf(root));
