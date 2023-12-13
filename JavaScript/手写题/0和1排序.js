function mySort(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    while (arr[left] === 0 && left < right) left++;

    while (arr[right] === 1 && left < right) right--;

    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++, right--;
  }

  return arr;
}

console.log(mySort([0, 1, 0, 1, 1, 0, 0, 1]));
