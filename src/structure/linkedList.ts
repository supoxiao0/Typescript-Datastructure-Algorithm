class Node<T> {
  public element: T
  public next: Node<T>
  constructor(element: T = null, next: Node<T> = null) {
    this.element = element
    this.next = next
  }
}
export default class LinkedList<T> {
  private size = 0
  private dummyhead: Node<T> = new Node()

  add(element: T, index: number = 0): boolean {
    if (index >= 0 || index <= this.size) {
      let prev = this.dummyhead
      for (let i = 0; i < index; i++) {
        prev = prev.next
      }
      // const node = new Node(element)
      // node.next = prev.next
      // prev.next = node
      prev.next = new Node(element, prev.next)
      this.size++
    }
    return false
  }
  addFirst(element: T) {
    this.add(element)
  }
  addLast(element: T) {
    this.add(element, this.size)
  }
  getSize() {
    return this.size
  }
  isEmpty() {
    return !this.size
  }
  get(index: number) {
    if (index >= 0 || index <= this.size) {
      let current = this.dummyhead.next
      for (let i = 0; i < index; i++) {
        current = current.next
      }
      return current.element
    }
    return undefined
  }
  getFirst() {
    return this.get(0)
  }
  getLast() {
    return this.get(this.size - 1)
  }
  set(element:T, index:number) {
    if (index >= 0 || index <= this.size) {
      let current = this.dummyhead.next
      for(let i = 0; i < index; i++) {
        current = current.next
      }
      current.element = element
      return true
    }
    return false
  }
  contains(element:T):boolean {
    for(let current = this.dummyhead.next; current !== null; current = current.next) {
      if (current.element === element)
        return true
    }
    return false
  }
  remove(index:number) {
    if (index >= 0 || index <= this.size) {
      let prev = this.dummyhead
      for(let i = 0; i < index; i++) {
        prev = prev.next
      }
      let current = prev.next
      prev.next = current.next
      current.next = null
      this.size --
      return current.element
    }
    return undefined
  }
}
