function getType(target) {
  if (target === null) return target + ""
  if (typeof target === "object") {
    let c = Object.prototype.toString.call(target)
    let type = c.split(" ")[1].split("")
    type.pop()
    return type.join("").toLowerCase()
  } else {
    return typeof target
  }
}

console.log(getType(new Array()));
