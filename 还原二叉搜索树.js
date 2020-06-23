var root = {
  val: 3,
  left: { val: 1, left: null, right: null },
  right: {
    val: 4,
    left: { val: 2, left: null, right: null },
    right: null
  }
}


let pre = null;
let s = null
let t = null

var recoverTree = function (root) {
  traverse(root)
  change(s, t)
  return root
};

var traverse = function (node) {
  if (!node) return
  traverse(node.left)
  if (pre && node.val < pre.val) {
    t = node
    if (s === null) {
      s = pre
    }
  }
  pre = node
  traverse(node.right)
}

var change = function (s, t) {
  let temp = s.val
  s.val = t.val
  t.val = temp
}

console.log(recoverTree(root))
