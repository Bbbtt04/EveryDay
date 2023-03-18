class EventEmiter {
  constructor() {
    this.event = {}
  }
  on(name, cb) {
    if (this.event[name]) {
      this.event[name].push(cb)
    } else {
      this.event[name] = [cb]
    }
  }
  off(name, cb) {
    if (!this.event[name]) return
    if (!cb) return
    this.event[name] = this.event[name].filter(item => {
      return item !== cb
    })
  }
  emit(name, ...args) {
    if (!this.event[name]) return;
    this.event[name].forEach(cb => cb(args))
  }
  once(name, cb) {
    const one = (...args) => {
      cb(...args)
      this.off(name, cb)
    }
    this.on(name, one)
  }
}
