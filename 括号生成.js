// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
// 输入：n = 3
// 输出：[
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

var generateParenthesis = function (n) {
  const res = []
  generateParenthesisDFS(n, n, '', res)
  return res
};


function generateParenthesisDFS(left, right, str, res) {
  if (left > right) return
  if (left === 0 && right === 0) return res.push(str)
  if (left > 0) {
    generateParenthesisDFS(left - 1, right, str + '(', res)
  }
  if (right > 0) {
    generateParenthesisDFS(left, right - 1, str + ')', res)
  }
}

console.log(generateParenthesis(3))
