// 给你两个二进制字符串，返回它们的和（用二进制表示）。
//
// 输入为 非空 字符串且只包含数字 1 和 0。
//
//  
//
// 示例 1:
//
// 输入: a = "11", b = "1"
// 输出: "100"
// 示例 2:
//
// 输入: a = "1010", b = "1011"
// 输出: "10101"
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/add-binary
//   著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let l = a.length
  let r = b.length
  if (l < r) {
    a = a.padStart(r, '0')
  }
  if (l > r) {
    b = b.padStart(l, '0')
  }
  // 记录是否要进位
  let flag = false
  let res = ''
  for (let i = a.length - 1; i >= 0; i --) {
    if (a[i] == '1' && b[i] == '1') {
      if (flag) {
        res = '1' + res
      } else {
        res = '0' + res
      }
      flag = true
    } else if (a[i] == '0' && b[i] == '0') {
      if (flag) {
        res = '1' + res
      } else {
        res = '0' + res
      }
      flag = false
    } else {
      if (flag) {
        res = '0' + res
        flag = true
      } else {
        res = '1' + res
        flag = false
      }
    }
  }
  return flag ? '1' + res : res
};
