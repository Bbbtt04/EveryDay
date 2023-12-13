function transformName(str) {
  const arr = str.split('');

  return arr.map(item => {
    if (item.toUpperCase() === item) {
      return '_' + item.toLowerCase();
    } else {
      return item;
    }
  }).join('');
}

let ans = transformName("getElementsByTagName")
console.log(ans);

