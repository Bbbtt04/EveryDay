Promise.MyAll = function (promises) {
  let arr = []
  let count = 0
  return Promise((resolve, reject) => {
    promise.forEach((item, index) => {
      Promise.resolve(item).then(res => {
        arr[index] = res
        count += 1
        if (count === promises.length) resolve(arr)
      }).catch(reject)
    })
  })
}
