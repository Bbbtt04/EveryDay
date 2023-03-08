const s = Symbol()
console.log(typeof s); // symbol

const WBT_NAME = Symbol('wbt')
const WBT_AGE = Symbol('wbt')

let obj = {
  [WBT_NAME]: 'wbt',
  [WBT_AGE]: 18,
}

console.log(obj); // {Symbol(wbt): "wbt", Symbol(wbt): 18}

for (let key in obj) {
  console.log(key); // undefined
}

// 获取Symbol属性 的两种方法
console.log(Object.getOwnPropertySymbols(obj));

console.log(Reflect.ownKeys(obj));

// 共享Symbol
let s2 = Symbol.for('wbt')
let s3 = Symbol.for('wbt')
console.log(s2 === s3); // true 

obj = {}
obj[s2] = 11
console.log(obj); // {Symbol(wbt): 11}

/* 
  总结：
  1. Symbol是ES6新增的数据类型，表示独一无二的值
*/
/* 
  symbol的使用场景
  1.定义对象的私有属性
  2.定义类的私有属性
*/
