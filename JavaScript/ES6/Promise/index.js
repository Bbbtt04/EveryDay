const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected'

class myPromise {
  constructor(executor) {
    executor(this.resolve, this.reject)
  }
  status = PENDING;
  value = null;
  reason = null;
  onFulfilledCallbacks = [];
  onRejectedCallbacks = [];

  resolve = (value) => {
    if (this.status === PENDING) {
      this.status = FULFILLED
      this.value = value
      while (this.onFulfilledCallbacks.length) {
        this.onFulfilledCallbacks.shift()(value)
      }
    }
  }

  reject = (reason) => {
    if (this.status === PENDING) {
      this.status = REJECTED
      this.resolve = reason
      while (this.onRejectedCallbacks.length) {
        this.onRejectedCallbacks.shift()(this.value)
      }
    }
  }

  then(onFulfilled, onRejected) {
    const promise2 = new myPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        queueMicrotask(() => {
          const x = onFulfilled(this.value)
          resolvePromise(promise2, x, resolve, reject)
        })
      } else if (this.status === REJECTED) {
        onRejected(this.reason)
      } else if (this.status === PENDING) {
        this.onFulfilledCallbacks.push(onFulfilled)
        this.onRejectedCallbacks.push(onRejected)
      }
    })
    return promise2
  }

}
function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  if (x instanceof myPromise) {
    x.then(resolve, reject)
  } else {
    resolve(x)
  }
}

const promise = new myPromise((resolve, reject) => {
  resolve("success")
})

function other() {
  return new myPromise((resolve, reject) => {
    resolve('other')
  })
}
const p1 = promise.then(val => {
  console.log(1)
  console.log('resolve', val)
  return p1
})

p1.then((val) => {
  console.log(2);
})
