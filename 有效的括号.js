/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

 有效字符串需满足：

 左括号必须用相同类型的右括号闭合。
 左括号必须以正确的顺序闭合。
 注意空字符串可被认为是有效字符串。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/valid-parentheses
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 **/

// 1. 创建一个map
// 2. 创建一个stack
// 3. 循环数组看stack中是否有当前的左括号的值。如果有则从stack中pop这个值看是否相等，如果不相等return false

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = new Map([['{', '}'], ['(', ')'], ['[', ']']])
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const key = s[i]
    if (map.has(key)) {
      stack.push(map.get(key))
    } else {
      if (stack.pop() !== key) {
        return false
      }
    }
  }
  return stack.length === 0;

};

console.log(isValid("{[]}"))
