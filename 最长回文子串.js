/*
* 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"
* */

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
  if (!s) return ''
  let start = 0, end = 0;
  const l = s.length
  for (let i = 0;i < l; i++) {
    const len1 = expandAroundCenter(s, i, i) // 如果是偶数长度
    const len2 = expandAroundCenter(s, i, i + 1) // 奇数长度
    const len = Math.max(len1, len2)
    if (len > end - start) {
      start = i - (len - 1 >> 1)
      end = i + (len >> 1)
    }
  }
  return s.substring(start, end + 1)
};

const expandAroundCenter = (str, left, right) => {
  let L = left, R = right
  while(L >= 0 && R < str.length && str[L] === str[R]) {
    L --;
    R ++;
  }
  return R - L - 1
}

console.log(longestPalindrome('caba'))
