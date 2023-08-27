let buf = Buffer.alloc(10);
console.log(buf);

let buf_2 = Buffer.allocUnsafe(100000);
console.log(buf_2);

let buf_3 = Buffer.from('I love you');
console.log(buf_3,buf_3.toString());
