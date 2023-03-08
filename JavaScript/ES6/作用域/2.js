for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// 原因： setTimeout() 的回调函数是在全局作用域中执行的，所以它会访问全局作用域中的 i

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000)
}
// 原因： let 声明的变量只在它所在的代码块中有效，所以每次循环都会创建一个新的 i

for (var i = 0; i < 5; i++) {
  (function (o) {
    setTimeout(function () {
      console.log(o);
    }, 1000);
  })(i)
}
// 原因： 通过使用 IIFE，我们可以在每次循环中创建一个新的作用域，从而让每次迭代都能够访问到正确的 i

for (var i = 0; i < 5; i++) {
  setTimeout(function (o) {
    console.log(o);
  }, 1000, i)
}
// 原因： 通过使用 setTimeout() 的第三个参数，我们可以将 i 传递给回调函数
