var preorder = [3, 9, 20, 15, 7]
var inorder = [9, 3, 15, 20, 7]

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 && inorder.length === 0) return null
  var head = preorder[0]
  if (!head) return null
  var mid = inorder.indexOf(head)
  var midLeft = inorder.slice(0, mid)
  var midRight = inorder.slice(mid + 1)
  var preLeft = preorder.slice(1, mid + 1)
  var preRight = preorder.slice(mid + 1)
  var tree = new TreeNode(head)
  tree.left = buildTree(preLeft, midLeft)
  tree.right = buildTree(preRight, midRight)
  return tree
};

console.log(buildTree(preorder, inorder))
