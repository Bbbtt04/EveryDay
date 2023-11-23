class EventEmiter {
  constructor() {
    this.event = [];
  }
  on(name, cb) {
    if (this.event[name]) {
      this.event[name].push(cb);
    } else {
      this.event[name] = [cb];
    }
  }
  off(name, cb) {
    if (!this.event[name]) return;
    this.event[name] = this.event[name].filter((e) => e !== cb);
  }
  emit(name, ...args) {
    if (!this.event[name]) return;
    this.event[name].forEach(cb => cb(...args));
  }
  once(name, cb) {
    const func = () => {
      cb(...args);
      this.off(name, cb);
    }
    this.emit(name, func);
  }
}
