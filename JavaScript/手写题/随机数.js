function generateRandom(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.round(Math.random() * (32 - 2) + 2)); // 生成2-32之间的随机数
  }
  return arr;
}

console.log(generateRandom(10));
