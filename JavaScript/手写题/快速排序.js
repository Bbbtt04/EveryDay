function quickSort(a, l, r) {
  if (l >= r) return
  let i = l - 1, j = r + 1, x = a[(l + r) / 2]
  while (i < j) {
    do i++;
    while (a[i] < x)
    do j--;
    while (a[j] > x)
    if (i < j) swap(a[i], a[j])
  }
  quickSort(a, l, j), quickSort(a, j + 1, r)
}
function swap(a, b) {
  let t = a
  a = b
  b = t
}

const a = [3, 4, 5, 13, 51]

quickSort(a, 0, a.length - 1)

console.log(a);
