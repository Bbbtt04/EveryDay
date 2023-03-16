function Parent(name) {
  this.name = name
}
Parent.prototype.getName = function () {
  return this.name
}
function Son(name, age) {
  Parent.call(this, name)
  this.age = age
}
Son.prototype.getAge = function () {
  return this.age
}
Son.prototype.__proto__ = Object.create(Parent.prototype)

const son = new Son('wbt', 20)

console.log(son.getAge());
console.log(son.getName());
