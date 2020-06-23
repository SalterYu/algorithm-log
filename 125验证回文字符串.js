// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
//
// 说明：本题中，我们将空字符串定义为有效的回文串。
//
// 示例 1:
//
// 输入: "A man, a plan, a canal: Panama"
// 输出: true
// 示例 2:
//
// 输入: "race a car"
// 输出: false
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/valid-palindrome
//   著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let i = 0;
  let j = s.length - 1
  const a = 'a'.charCodeAt(0)
  const z = 'z'.charCodeAt(0)
  const zero = '0'.charCodeAt(0)
  const nine = '9'.charCodeAt(0)
  while (i <= j) {
    let start = s[i].toLowerCase().charCodeAt(0)
    let end = s[j].toLowerCase().charCodeAt(0)
    if (!((start >= zero  && start <= nine) || (start >= a && start <= z))) {
      i ++
      continue;
    }
    if (!((end >= zero  && end <= nine) || (end >= a && end <= z))) {
      j --
      continue;
    }
    if (start !== end) {
      return false
    } else {
      i ++
      j --
    }
  }
  return true
};

var isPalindrome = function (s) {
  var arr = s
    .replace(/[^\d^\w]/g, '')
    .toLowerCase()
    .split('');

  return arr.join() === arr.reverse().join();
};


console.log(isPalindrome(  "A man, a plan, a canal: Panama"))
