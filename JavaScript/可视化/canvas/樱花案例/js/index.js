let num = 100
let stop
let newHuabanList = new huabanList()

function startDraw() {
  // 定义画布
  let canvas = document.querySelector("canvas"), ctx;

  // 初始化画布的宽高
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");

  ctx.save()

  // 生成花瓣
  for (let i = 0; i < num; i++) {
    let randomX, randomY, randomS, randomR, newHuaban;
    randomX = getRandom("x");
    randomY = getRandom("y");
    randomR = getRandom("r");
    randomS = getRandom("s");
    newHuaban = new huaban(randomX, randomY, randomS, randomR);
    newHuabanList.push(newHuaban);
  }
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
  // 画花瓣
  newHuabanList.draw(ctx)
  // 动画
  stop = requestAnimationFrame(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 清空画布
    newHuabanList.update(); // 更新
    newHuabanList.draw(ctx); // 绘制
    stop = requestAnimationFrame(arguments.callee); // 递归重绘
  });
}

let img = new Image();
img.src = "img/huaban.png";

// 图片加载完成时开始画
img.onload = function () {
  startDraw()
}

// 画布大小改变时重新初始化画布
// window.onresize = function () {
//   startDraw()
// }

function huaban(x, y, s, r) {
  this.x = x
  this.y = y
  this.s = s
  this.r = r
}
huaban.prototype.draw = function (ctx) {
  ctx.translate(this.x, this.y)
  ctx.rotate(this.r)
  ctx.drawImage(img, 0, 0, 40 * this.s, 40 * this.s)

  ctx.restore()
  ctx.save()
}
huaban.prototype.update = function () {
  this.x = getRandom("fnx")(this.x, this.y)
  this.y = getRandom("fny")(this.x, this.y)
  this.r = getRandom("fnr")(this.r)
  if (
    // 判断是否超出边界
    this.x > window.innerWidth ||
    this.x < 0 ||
    this.y > window.innerHeight ||
    this.y < 0
  ) {
    // 如果超出边界 则重新生成随机坐标
    this.r = getRandom("fnr");
    if (Math.random() > 0.4) {
      // 如果随机值大于0.4 则重新生成x轴随机坐标
      this.x = getRandom("x");
      this.y = 0;
      this.s = getRandom("s");
      this.r = getRandom("r");
    } else {
      // 如果随机值小于0.4 则重新生成y轴随机坐标
      this.x = window.innerWidth;
      this.y = getRandom("y");
      this.s = getRandom("s");
      this.r = getRandom("r");
    }
  }
}

function huabanList() {
  this.list = []
}
huabanList.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  this.list.forEach((item) => {
    item.draw(ctx)
  })
}
huabanList.prototype.push = function (item) {
  this.list.push(item)
}
huabanList.prototype.update = function () {
  this.list.forEach((item) => {
    item.update()
  })
}

function getRandom(option) {
  var ret, random;
  switch (option) {
    case "x":
      // x轴随机坐标
      ret = Math.random() * window.innerWidth;
      break;
    case "y":
      // y轴随机坐标
      ret = Math.random() * window.innerHeight;
      break;
    case "s":
      ret = Math.random();
      break;
    case "r":
      ret = Math.random() * 6;
      break;
    case "fnx":
      // x轴随机函数
      random = -0.1 + Math.random() * 1;
      ret = function (x, y) {
        return x + 0.5 * random - 1;
      };
      break;
    case "fny":
      // y轴随机函数
      random = 0.4 + Math.random() * 0.7;
      ret = function (x, y) {
        return y + random;
      };
      break;
    case "fnr":
      // r轴随机函数
      random = Math.random() * 0.02;
      ret = function (r) {
        return r + random;
      };
      break;
  }
  return ret;
}
