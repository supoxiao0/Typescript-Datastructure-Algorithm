/** 
 * stack，LIFO
*/
export default class Stack<T> {
  private stack: {[key:number]:T} = {}
  private count = 0
  push(...args: T[]) {
    for (const val of args) {
      this.stack[this.count] = val
      this.count ++
    }
  }
  pop() {
    if(this.isEmpty())
      return undefined
    const val = this.stack[this.count - 1]
    delete this.stack[this.count - 1]
    this.count --
    return val
  }
  peek() {
    return this.stack[this.count - 1]
  }
  isEmpty() {
    return !this.count
  }
  size() {
    return this.count
  }
  clear() {
    this.stack = {}
    this.count = 0
  }
  toString() {
    return this.isEmpty() ? '' : `[${Object.values(this.stack).join(',')}]:stack peek`
  }
}
