Function.prototype.myCall = function (context, ...args) {
  context = context || window
  args = args || []
  const key = new Symbol()
  context[key] = this
  const res = context[key](...args)
  delete context[key]
  return res
}
Function.prototype.myApply = function (context, args) {
  context = context || window
  args = args || []
  const key = new Symbol()
  context[key] = this
  const res = context[key](...args)
  delete context[key]
  return res
}
Function.prototype.myBind = function (context, ...args) {
  let self = this
  args = args || []
  return function (...newargs) {
    const key = Symbol()
    context[key] = self
    const res = context[key](...args, ...newargs)
    delete context[key]
    return res
  }
}
