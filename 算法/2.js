/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function (nums) {
  let map = new Map()
  let ans = []
  for (let i = 0; i < nums.length; i++) {
    console.log(map);
    if (map.has(nums[i])) {
      let last = map.get(nums[i])
      map.set(nums[i], [...last, i])
    }
    else {
      map.set(nums[i], [i])
    }
  }
  for (let i = 0; i < nums.length; i++) {
    let val = map.get(nums[i])
    let w = 0;
    for (let j = 0; j < val.length; j++) {
      w += Math.abs(i - val[j]);
    }
    ans[i] = w;
  }
  return ans;
};

let nums = [1, 3, 1, 1, 2]
console.log(distance(nums));
