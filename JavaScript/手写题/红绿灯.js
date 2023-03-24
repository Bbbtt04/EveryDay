function red() {
  console.log("red");
}
function yellow() {
  console.log("yellow");
}
function green() {
  console.log("green");
}

function task(timer, light) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (light === "red") red()
      else if (light === 'green') green()
      else yellow()
      resolve()
    }, timer)
  })
}

const step = () => {
  task(3000, "red")
    .then(() => task(2000, "green"))
    .then(() => task(2100, 'yellow'))
    .then(step)
}
step()
