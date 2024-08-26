class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var postorderTraversal = function (root) {
  let answer = [];
  function traverse(node) {
    if (node == null) return;
    traverse(node.left);
    traverse(node.right);
    answer.push(node.val);
  }
  traverse(root);
  return answer;
};

let root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(postorderTraversal(root));
