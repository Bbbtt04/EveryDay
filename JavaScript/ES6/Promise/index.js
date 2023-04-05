const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected'

class myPromise {
  constructor(executor) {
    try {
      executor(this.resolve, this.reject)
    } catch (error) {
      this.reject(error)
    }
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
    const realOnFulfilled = typeof onFulfilled === 'function'
      ? onFulfilled
      : value => value
    const realOnRejected = typeof onRejected === 'function'
      ? onRejected
      : reason => { throw reason }

    const promise2 = new myPromise((resolve, reject) => {
      const fulfilledMicrotask = () => {
        queueMicrotask(() => {
          try {
            const x = realOnFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }
      const rejectedMicrotask = () => {
        queueMicrotask(() => {
          try {
            const x = realOnRejected(this.reason)
            rejectedMicrotask(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }

      if (this.status === FULFILLED) {
        fulfilledMicrotask()
      } else if (this.status === REJECTED) {
        rejectedMicrotask()
      } else if (this.status === PENDING) {
        this.onFulfilledCallbacks.push(onFulfilled)
        this.onRejectedCallbacks.push(onRejected)
      }
    })
    return promise2
  }

  static resolve(parameter) {
    if (parameter instanceof myPromise) {
      return parameter
    }
    return new myPromise(resolve => {
      resolve(parameter)
    })
  }

  static reject(reason) {
    return new myPromise((resolve, reject) => {
      reject(reason)
    })
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
