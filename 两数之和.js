/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hash = {};
  const res = [];
  for (let index in nums) {
    if (Object.prototype.hasOwnProperty.call(nums, index)) {
      const value = nums[index];
      const cutValue = target - value;
      if (hash[cutValue] !== undefined) {
        res[1] = index;
        res[0] = hash[cutValue];
        break;
      } else {
        hash[value] = index;
      }
    }
  }
  return res;
}


/*
* 给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。*/
