import compareFn from '../../helpers/compareFn'
export function binarySearch<T>(
  array: T[],
  target: T,
  compareFn: compareFn<T>
) {
  let l = 0
  let r = array.length - 1
  while (l <= r) {
    let mid = Math.floor((l + r) / 2)
    if (compareFn(array[mid], target) === 0) return mid
    else if (compareFn(array[mid], target) > 0) r = mid - 1
    else l = mid + 1
  }
  return -1
}
