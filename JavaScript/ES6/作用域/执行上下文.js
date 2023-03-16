let a = "Hello World!"
function first() {
  console.log("1");
  second()
  console.log("2");
}
function second() {
  console.log("3");
}
first()

// 执行上下文就是在解析代码时，js会先创建一个全局执行上下文环境，
// 先把即将执行的变量、函数声明都拿出来，先赋值为undefined，函数先声明
