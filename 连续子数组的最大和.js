/**
 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
 输出: 6
 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 **/

var maxSubArray = function (nums) {
  if (!nums || !Array.isArray(nums)) return NaN
  var max = nums[0];
  var sums = nums[0];
  for (var i = 1; i < nums.length; i++) {
    if (sums <= 0) {
      sums = nums[i]
    } else {
      sums += nums[i]
    }
    max = Math.max(sums, max)
  }
  return max;

};

console.log(maxSubArray([1, 2, 3, -1, 2, 4, -3]))



