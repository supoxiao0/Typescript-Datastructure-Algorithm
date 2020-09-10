import compareFn from '../helpers/compareFn'

interface addFn<T> {
  (e: T, compareFn: compareFn<T>, node?:Node<T>) : any
}

class Node<T> {
  public e
  public left
  public right
  constructor(e: T = null, left: T = null, right: T = null) {
    this.e = e
    this.left = left
    this.right = right
  }
}

