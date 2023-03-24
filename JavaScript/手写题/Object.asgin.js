function assign(target, ...args) {
  let ret = Object(target)
  args.forEach(obj => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        ret[key] = obj[key]
      }
    }
  })
  return ret
}
