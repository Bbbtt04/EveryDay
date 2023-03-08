function foo(a) {
  var b = 2;
  console.log(c); // undefined
  function bar() {
    var c = 3;
    if (true) {
      var d = 4;
    }
    console.log(d);
  }
  bar();
}
foo(1)
