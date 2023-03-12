Array.prototype.map = function (cb) {
  const res = []
  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i], i, this))
  }
  return res
}
let arr = [1, 2, 3]
let res = arr.map((item, index, arr) => {
  return item + 1
})
console.log(res);
