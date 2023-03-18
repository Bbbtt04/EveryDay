class Subject {
  constructor() {
    this.observerList = []
  }
  addObserver(observer) {
    this.observerList.push(observer)
  }
  removeObserver(observer) {
    const index = this.observerList.findIndex(o => o === observer)
    this.observerList.splice(index, 1)
  }
  notifyObservers(message) {
    const observers = this.observerList
    observers.forEach(observer => observer.notified(message))
  }
}

class Observer {
  constructor(name, subject) {
    this.name = name
    if (subject) {
      subject.addObserver(this)
    }
  }
  notified(message) {
    console.log(this.name, ' message: ', message);
  }
}
