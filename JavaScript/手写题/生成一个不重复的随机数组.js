function randomUniqueArr(len = 20, min = 0, max = 200) {
  if (max - min < len) {
    return null
  }
  let hash = []
  while (hash.length < len) {
    let random = Math.floor((Math.random() * max))
    if (random < min) continue
    if (hash.indexOf(random) === -1) {
      hash.push(random)
    }
  }
  return hash
}

console.log(randomUniqueArr());
console.log(randomUniqueArr(100, 0, 300));
