function sleep(time) {
  return new Promise((reslove, reject) => {
    setTimeout(() => reslove(), time);
  })
}

async function print() {
  for (let i = 1; i <= 10; i++) {
    await sleep(i * 1000);
    console.log(i);
  }
}

print();
