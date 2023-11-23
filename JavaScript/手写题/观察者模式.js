class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer)
  }

  removeObserver(observer) {
    const index = this.observers.findIndex(o => o.name === observer.name);
    this.observers.splice(index, 1);
  }

  notifyObservers(message) {
    this.observers.forEach(o => o.notify(message));
  }
}

class Observer {
  constructor(name, subject) {
    this.name = name;
    subject.addObserver(this);
  }

  notify(message) {
    console.log(this.name, " ", message);
  }
}

const subject = new Subject();
const observer = new Observer('foo', subject);
const observer2 = new Observer('bar', subject);

subject.notifyObservers('Hello from subject');
