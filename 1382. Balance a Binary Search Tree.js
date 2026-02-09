class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var balanceBST = function (root) {
  const nodes = [];

  function sortNode(root) {
    if (!root) return;
    sortNode(root.left);
    nodes.push(root.val);
    sortNode(root.right);
  }

  function buildNode(start, end) {
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);
    const node = new TreeNode(nodes[mid]);
    node.left = buildNode(start, mid - 1);
    node.right = buildNode(mid + 1, end);
    return node;
  }

  sortNode(root);
  console.log(nodes);

  return buildNode(0, nodes.length - 1);
};

const root = new TreeNode(
  1,
  null,
  new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4, null, null))),
);

console.log(balanceBST(root));
