// https://www.cnblogs.com/mfrank/p/10472663.html
// https://leetcode-cn.com/problems/regular-expression-matching/


function createArray(...args) {
  if (args.length === 0) return [];
  let arg = args[0];
  if (arg) {
    let arr = new Array(arg);
    args = args.slice(1);
    for (let i = 0; i < arg; i++) {
      if (args.length) {
        arr[i] = createArray(...args);
      }
    }
    return arr;
  }
}

let memo
let Result = {
  FALSE: false,
  TRUE: true
}
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
let isMatch = function(s, p) {
  memo = createArray(s.length + 1, p.length + 1);
  return dp(0,0, s, p)
};

function dp(i, j, text, pattern) {
  if (memo[i][j] != null) {
    return memo[i][j] == Result.TRUE;
  }
  let ans;
  if (j == pattern.length) {
    ans = i == text.length;
  } else {
    let first_match = i < text.length && (pattern.charAt(j) == text.charAt(i) || pattern.charAt(j) == '.');
    if (j + 1 < pattern.length && pattern.charAt(j + 1) == '*') {
      ans = dp(i, j + 2, text, pattern) || (first_match && dp(i + 1, j, text, pattern));
    } else {
      ans = first_match && dp(i + 1, j + 1, text, pattern);
    }
  }
  memo[i][j] = ans ? Result.TRUE : Result.FALSE;
  console.log('ans', ans);
  return ans;
}

console.log(isMatch('a', 'a*'), JSON.stringify(memo, null, 2));


function isMatch1(s, p) {
  if (p.length <= 0) return s.length <= 0;
  let match = s.charAt(0) === p.charAt(0) || p.charAt() === '.';
  if (p.charAt(1) === '*') {
    return isMatch(s, p.substring(2)) || (match && isMatch(s.substring(1), p));
  } else {
    return match && isMatch(s.substring(1), p.substring(1));
  }
}
//
// let memo;
// function isMatch2(s, p) {
//   memo = createArray(s.length + 1, p.length + 1);
//   return match(0, 0, s, p);
// }
//
// function match(i, j, s, p) {
//   if (memo[i][j] != null) {
//     return memo[i][j] == true;
//   }
//   let ans;
//   if (j === p.length) {
//     ans = i === s.length;
//   } else {
//     let curMatch = (i < s.length && s[i] === p[j]) || p[j] === '.';
//     if (j + 1 < p.length && p[j + 1] === '*') {
//       ans = match(i, j + 2, s, p) || (curMatch && match(i + 1, j, s, p));
//     } else {
//       ans = curMatch && match(i + 1, j + 1, s, p)
//     }
//   }
//   memo[i][j] = ans;
//   return ans;
// }

console.log(isMatch('aaaaab', 'a*aaab'))
// 主要是递归和动态规划。
// 动态规划就是将曾经的计算结果储存起来，之后发现需要这个值的时候直接返回值
