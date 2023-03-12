const arr = [1, [2, 3, [4, 5]], 1, 2, [6, 7]]

Array.prototype.flat = function (deep = 1) {
  let result = []
  for (let item of this) {
    if (Array.isArray(item) && deep >= 1) {
      result = result.concat(item.flat(--deep))
    } else {
      result.push(item)
    }
  }
  return result
}

console.log(arr.flat(2));
