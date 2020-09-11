import LinkedList from "./linkedList";

/**
 * add<T>():void 添加元素，不能重复添加元素
 * remove<T>():void 删除元素
 * contains<T>():boolean 是否包含元素
 * getSize():number
 * isEmpty():boolean 集合是否为空
 */
export class Set<T> {
  protected set = new LinkedList<T>()

  isEmpty() {
    return this.set.isEmpty()
  }

  getSize() {
    return this.set.getSize()
  }

  add(e:T) {
    return this.set.add(e)
  }

  contains(e:T) {
    return this.set.contains(e)
  }


 }