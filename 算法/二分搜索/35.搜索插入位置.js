/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let l = -1, r = nums.length, mid;
  while (l + 1 !== r) {
    mid = (l + r) >> 1;
    if (nums[mid] < target) l = mid
    else r = mid
  }
  return r
};
let nums = [1, 3, 5, 6], target = 5
console.log(searchInsert(nums, target))
