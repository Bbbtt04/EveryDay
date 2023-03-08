// 防抖 回城 节流 放技能
function debounce(fn) {
  let timer = null
  return function () {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, 1000)
  }
}


function throttle(fn) {
  let timer = null
  return function () {
    if (timer) return

    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    })
  }
}
