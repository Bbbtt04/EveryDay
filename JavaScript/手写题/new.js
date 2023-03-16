function myNew(fn, ...args) {
  const obj = {}
  obj.__proto__ = fn.prototype
  const value = fn.apply(obj, args)
  return value instanceof Object ? value : obj
}
const arr = new Array()
const myArr = myNew(Array)
