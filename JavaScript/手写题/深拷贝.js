let obj = {
  a: 1,
  b: 2,
  c: {
    c: 1,
    d: 2
  }
}

function deepClone(obj) {
  let clone = Array.isArray(obj) ? [] : {}
  for (let key of Object.keys(obj)) {
    if (typeof obj[key] === 'object') {
      clone[key] = deepClone(obj[key])
    } else {
      clone[key] = obj[key]
    }
  }
  return clone
}

let clone = deepClone(obj)
clone.a = 1000000000
console.log(obj);
