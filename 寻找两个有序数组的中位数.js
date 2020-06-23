/** 根据长度预先知道中位数的位置，然后两个数组的值一个一个比较
 * 时间复杂度：遍历 len/2+1 次，len=m+n，所以时间复杂度依旧是 O(m+n)O(m+n)。

 空间复杂度：我们申请了常数个变量，也就是 m，n，len，left，right，aStart，bStart 以及 i。

 总共 8 个变量，所以空间复杂度是 O(1）O(1）。
 * @param numsA
 * @param numsB
 * @returns {number}
 */
function findMedianSortedArrays(numsA, numsB) {
  const l1 = numsA.length, l2 = numsB.length;
  let left = -1, right = -1;
  let aStart = 0,bStart = 0;
  const l = l1 + l2
  const mid = l >> 1
  for (let i = 0; i <= mid; i++) {
    left = right
    if (aStart < l1 && (bStart >= l2 || numsA[aStart] < numsB[bStart])) {
      right = numsA[aStart ++]
    } else {
      right = numsB[bStart ++]
    }
  }
  if (l % 2) {
    return right
  } else {
    return (left + right) / 2
  }
}

/** 找第k小的数字
 * 时间复杂度：每进行一次循环，我们就减少 k/2 个元素，所以时间复杂度是 O(log(k)，而 k=(m+n)/2，所以最终的复杂也就是 O(log(m+n）O(log(m+n）。

 空间复杂度：虽然我们用到了递归，但是可以看到这个递归属于尾递归，所以编译器不需要不停地堆栈，所以空间复杂度为 O(1)O(1)。
 * @param numsA
 * @param numsB
 * @returns {number}
 */
function findMedianSortedArrays2(numsA, numsB) {
  const l1 = numsA.length, l2 = numsB.length
  const l = l1 + l2
  return (getKth(numsA, 0, numsA.length - 1, numsB , 0, numsB.length - 1, (l + 1) >> 1) +
          getKth(numsA, 0, numsA.length - 1, numsB , 0, numsB.length - 1, (l + 2) >> 1)) * 0.5
}

// 在两个数组中找第K小的数字
function getKth(numsA, startA, endA, numsB, startB, endB, k) {
  let mid = k >> 1
  const l1 = endA - startA + 1
  const l2 = endB - startB + 1
  if (l1 > l2) return getKth(numsB, startB, endB, numsA, startA, endA, k)
  if (l1 === 0) return numsB[startB + k - 1];
  if (k === 1) return Math.min(numsA[startA], numsB[startB])
  let i = startA + Math.min(l1, mid) - 1 // -1 表示当前数组下的索引
  let j = startB + Math.min(l2, mid) - 1
  if (numsA[i] > numsB[j]) {
    return getKth(numsA, startA, endA, numsB, j + 1, endB, k - (j - startB + 1))
  } else {
    return getKth(numsA, i + 1, endA, numsB, startB, endB, k - (i - startA + 1))
  }
}

const numsA = [1, 2], numsB = [3, 4]
console.log(findMedianSortedArrays2(numsA, numsB))
