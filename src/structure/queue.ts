/**
 * 队列，先进先出
 */
export class Queue<T> {
  private queue: {[key:number]:T} = {}
  private count = 0
  private lcount = 0
  enqueue(...args: T[]) {
      for (const val of args) {
        this.queue[this.count] = val
        this.count ++
      }
  }
  dequeue() {
    if(this.isEmpty())
      return undefined
    const val = this.head()
    delete this.queue[this.lcount]
    this.lcount ++
    return val
  }
  head() {
    return this.queue[this.lcount]
  }
  tail() {
    return this.queue[this.count - 1]
  }
  size() {
    return this.count - this.lcount
  }
  isEmpty() {
    return !this.size()
  }
  clear() {
    this.queue = {}
    this.count = 0
    this.lcount = 0
  }
  toString() {
    return this.isEmpty() ? '' : `queue head:[${Object.keys(this.queue).join(',')}]:queue tail`
  }
}