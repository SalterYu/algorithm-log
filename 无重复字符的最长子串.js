// 乐扣第三题

var lengthOfLongestSubstring = function(s) {
  var arr = new Array(256)
  arr.fill(-1)
  let length = s.length
  let start = 0
  let max = 0
  for (var i = 0; i < length; i++) {
    var c = s.charCodeAt(i)
    var index = arr[c]
    if (index === -1) {
      // 没有重复
      arr[c] = i
    } else {
      // 重复了
      // 记录当前的长度
      max = Math.max(max, i - start)
      if (start <= index) {
        start = index + 1
      }
      arr[c] = i
    }
  }
  max = Math.max(max, length - start)
  return max
};

console.log(lengthOfLongestSubstring("pwwkew"))
