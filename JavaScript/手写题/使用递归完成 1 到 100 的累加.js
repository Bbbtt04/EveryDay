function sum(num) {
  if (num === 1) return 1
  return sum(num - 1) + num
}
console.log(sum(100));
