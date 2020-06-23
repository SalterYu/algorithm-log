// 基础二分算法, 时间复杂度为O(n)

const binSearch = (nums, target) => {
  let low = 0
  let high = nums.length - 1
  while (low <= high) {
    let mid = (low + high) >> 1
    if (target > nums[mid]) {
      low = mid + 1
    } else if (target < nums[mid]) {
      high = mid - 1
    } else {
      return mid
    }
  }
  return -1
}

const nums = [1, 3, 4, 5, 7, 10]
console.log(binSearch(nums, 5))

// 进阶二分算法, 时间复杂度 O(log(n))
const binSearch2 = (nums, target) => {
  let high = nums.length
  let low = 0
  while(1 < high - low) {
    let mid = (high + low) >> 1;
    (target < nums[mid]) ? high = mid : low = mid;
  }
  return target === nums[low] ? low : -1
}
console.log(binSearch2(nums, 5))

