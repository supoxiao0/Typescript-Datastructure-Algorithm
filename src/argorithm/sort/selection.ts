import swap from '../../helpers/swap'

/*
selection sort
The sorted array is built from left to right, from min to max.
*/
export function selectionSort<T>(
  array: T[],
  compareFn: (a: T, b: T) => number
): T[] {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i
    for (let j = 0; j < array.length; j++) {
      if (compareFn(array[j], array[minIndex]) < 0) minIndex = j
    }
    swap(array, i, minIndex)
  }
  return array
}
