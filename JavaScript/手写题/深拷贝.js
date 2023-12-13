let obj1 = {
};
let obj2 = {
  b: obj1
};
obj1.a = deepClone(obj2);
console.log(obj1);
function deepClone(obj, map = new WeakMap()) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  let clone = Array.isArray(obj) ? [] : {};
  if (map.has(obj)) return map.get(obj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      map.set(obj, obj[key]);
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

