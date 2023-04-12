var diagonalPrime = function (nums) {
  let ans = []
  let n = nums.length, m = nums[0].length
  let isPrime = (x) => {
    if (x < 2) return false
    for (let i = 2; i * i <= x; i++) {
      if (x % i === 0) return false
    }
    return true
  }
  for (let i = 0; i < n; i++) {
    ans.push(nums[i][i])
    ans.push(nums[i][nums.length - i - 1])
  }
  ans.sort((a, b) => b - a)
  for (let i = 0; i < ans.length; i++) {
    if (isPrime(ans[i])) return ans[i]
  }
  return 0;
};
let nums = [[1, 2, 3], [5, 6, 7], [9, 10, 11]]
console.log(diagonalPrime(nums))
