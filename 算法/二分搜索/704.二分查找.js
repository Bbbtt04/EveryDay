var search = function (nums, target) {
  let left = -1, right = nums.length;
  while (left + 1 !== right) {
    let mid = (right + left) >> 1;
    if (nums[mid] >= target) right = mid;
    else left = mid
  }
  console.log("left", left);
  if (nums[right] === target) return right
  return -1;
};

let a = [5], target = 5;
console.log(search(a, target));
