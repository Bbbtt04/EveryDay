console.log([] instanceof Array);

function myInstanceof(left, right) {
  let protoLeft = Object.getPrototypeOf(left)
  let protoRight = right.prototype

  while (true) {
    if (protoLeft === null) return false
    if (protoLeft === protoRight) return true
    protoLeft = Object.getPrototypeOf(left)
  }
}
console.log(myInstanceof([], Array));
