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
// Object.create ：c创建一个对象，对象的__proto__指向参数对象
Son.prototype = Object.create(Parent.prototype)
Son.prototype.constructor = Son

Son.prototype.getAge = function () {
  return this.age
}

const son = new Son('wbt', 20)

console.log(son.getAge());
console.log(son.getName());
