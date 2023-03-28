// 防抖 回城 节流 放技能
function dobounce(fn, wait) {
  let timer = null
  return function () {
    let context = this, args = arguments

    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      // fn.apply(context, args)
      fn(args)
    }, wait)
  }
}

function throttle(fn, delay) {
  let timer = null
  return function () {
    let context = this, args = arguments
    if (timer) return
    timer = setTimeout(() => {
      // fn.apply(context, args)
      fn(args)
      timer = null
    }, delay);
  }
}
