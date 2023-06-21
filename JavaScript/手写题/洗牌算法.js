function shuffleArray(arr) {
  let len = arr.length;
  for (let i = len - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr;
}

console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
