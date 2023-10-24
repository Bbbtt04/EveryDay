// 方法一：动态规划：时间复杂度O(n^2) 空间复杂度O(n)
/* var lengthOfLIS = function(nums) {
  if(nums.length === 0) return 0

  const dp = new Array(nums.length).fill(1)

  let ans = 1;
  for(let i = 1 ; i < nums.length; i ++) {
    for(let j = 0 ; j < i ; j ++) {
        if(nums[i] > nums[j]) {
            dp[i] = Math.max(dp[i],dp[j] + 1);
        }
    }
    ans = Math.max(dp[i],ans);
  }
  console.log(dp);
  return ans;
}; */
const arr = [10,9,2,5,3,7,101,18]
console.log(lenghtOfLIS(arr));
// 方法二：贪心+二分查找：时间复杂度O(nlogn) 空间复杂度O(n)
var lenghtOfLIS = function(nums) {
  let n = nums.length;
  if(n === 0) return 0;

  let d = new Array(n + 1).fill(0);
  let len = 1;
  d[len] = nums[0];
  for(let i = 1; i < n ; i ++) {
    if(num[i] > d[len]) {
      d[++len] = nums[i];
    } else {
      let l = 1 , r = len , pos = 0;
      while(l <= r) {
        let mid = (l + r) >> 1;
        if(d[mid] < num[i]) {
          pos = mid;
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      }
      d[pos + 1] = nums[i];
    }
  }
  return len;
}
