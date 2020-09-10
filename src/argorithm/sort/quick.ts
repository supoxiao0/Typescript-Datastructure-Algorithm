import swap from '../../helpers/swap'
import compareFn from '../../helpers/compareFn'

export function quickSort<T>(
  array: T[],
  compareFn: compareFn<T>
): T[] {
  sort(array, 0, array.length - 1, compareFn)
  return array
}

function sort<T>(
  array: T[],
  l: number,
  r: number,
  compareFn: compareFn<T>
): void {
  if (l >= r) return
  const random = l + Math.floor(Math.random() * (r - l + 1))
  swap(array, l, random)

  // 循环不变量 array[l+1, lt] < v, array[lt+1, i-1] == v, array[gt, r] > v
  let i = l + 1
  let lt = l
  let gt = r + 1
  while (i < gt) {
    if (compareFn(array[i], array[l]) < 0) {
      lt++
      swap(array, i, lt)
      i++
    } else if (compareFn(array[i], array[l]) > 0) {
      gt--
      swap(array, i, gt)
    } else {
      i++
    }
  }
  // array[l, lt-1] < v, array[lt, gt-1] == v, array[gt, r] > v
  swap(array, l, lt)

  sort(array, l, lt - 1, compareFn)
  sort(array, gt, r, compareFn)
}
