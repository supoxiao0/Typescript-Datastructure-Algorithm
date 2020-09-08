export function mergeSort<T>(array: T[], compareFn: (a: T, b: T) => number) {
  sort(array, 0, array.length - 1, compareFn)
}

function sort<T>(
  array: T[],
  l: number,
  r: number,
  compareFn: (a: T, b: T) => number
) {
  if (l >= r) return
  const mid = Math.floor((l + r) / 2)
  sort(array, l, mid, compareFn)
  sort(array, mid + 1, r, compareFn)
  if (compareFn(array[mid], array[mid + 1]) > 0) {
    merge(array, l, mid, r, compareFn)
  }
}

function merge<T>(
  array: T[],
  l: number,
  r: number,
  mid: number,
  compareFn: (a: T, b: T) => number
) {
  const arrayCopy = JSON.parse(JSON.stringify(array))
  let i = l
  let j = mid + 1
  for (let k = l; k < r; k++) {
    if (i > mid) {
      array[k] = arrayCopy[j - l]
      j++
    } else if (j > r) {
      array[k] = arrayCopy[i - l]
      i++
    } else if (compareFn(arrayCopy[i - l], arrayCopy[j - l]) <= 0) {
      array[k] = arrayCopy[i - l]
      i++
    } else {
      array[k] = arrayCopy[j - l]
      j++
    }
  }
}
