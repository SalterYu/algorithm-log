// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
//
// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) return []
  const memo = getInputStr(digits)
  const res = [memo[0]]
  var dfs = function (target) {
    for (let i = 1; i < target.length; i ++ ) {
      let pre = res[i - 1]
      let _res = []
      let row = target[i]
      for (let j = 0; j < pre.length; j ++) {
        for (let k = 0; k < row.length; k ++) {
          let str = pre[j] + row[k]
          _res.push(str)
        }
      }
      res.push(_res)
    }
  }
  dfs(memo)
  console.log(res)
  return res[res.length - 1]
};

var getInputStr = function (digits) {
  const map = new Map([[2, 'abc'], [3, 'def'], [4, 'ghi'], [5, 'jkl'], [6, 'mno'], [7, 'pqrs'], [8, 'tuv'], [9, 'wxyz']])
  let str = `${digits}`
  const arr = []
  for (const c of str) {
    arr.push(map.get(~~c).split(''))
  }
  return arr
}


console.log(letterCombinations(['234']))

