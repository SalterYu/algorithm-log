/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
/**
 * 输入："1-2--3--4-5--6--7"
 输出：[1,2,5,3,4,6,7]
 * @param S
 */

var recoverFromPreorder = function (S, splitStr = '-') {
  if (!S) return null
  let arr = split(S, splitStr)
  let node = new TreeNode(arr[0])
  node.left = arr[1] ? recoverFromPreorder(arr[1], splitStr + '-') : null
  node.right = arr[2] ? recoverFromPreorder(arr[2], splitStr + '-') : null
  return node
};

var split = function (S, splitStr) {
  const spL = splitStr.length
  const res = []
  let i = 0
  while (S.length > 0) {
    if (S[i] === '-' && S[i + spL] !== '-' && S[i - 1] !== '-') {
      res.push(S.substr(0, i))
      S = S.slice(i + spL)
      i = 0
    }
    i++
    if (i === S.length) {
      res.push(S)
      break;
    }
  }
  return res
}

console.log(split("1-2--3--4-5--6--7", '-'))
