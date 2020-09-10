import compareFn from '../../helpers/compareFn'
export function linearSearch<T>(
  array: T[],
  target: T,
  compareFn: compareFn<T>
): number {
  for (let i = 0; i < array.length; i++) {
    if (compareFn(array[i], target) === 0) return i
  }
  return -1
}
