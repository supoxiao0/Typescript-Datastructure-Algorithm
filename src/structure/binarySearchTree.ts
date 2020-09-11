import compareFn from '../helpers/compareFn'

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

/**
 * add<T>():void 添加元素，不能添加重复元素
 * remove<T>():void 删除元素
 * contains<T>():boolean 是否包含元素
 * getSize():number
 * isEmpty():boolean 集合是否为空
 */

export default class BinarySearchTree<T> {
  private size = 0
  private root:Node<T> = null

  add<T>(e:T, node?:Node<T>) {
    if(node === null ) {
      return this.root = new Node<T>(e)
    }
  }
}
