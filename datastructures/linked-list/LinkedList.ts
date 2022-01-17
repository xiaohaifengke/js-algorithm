import { Node } from '@/models/linked-list-models'
import { defaultEquals } from '@/utils'

export class LinkedList<T> {
  private count = 0
  private head: Node<T> | undefined = undefined
  constructor(private equalsFn = defaultEquals) {
    this.equalsFn = equalsFn
  }

  // 向链表尾部添加一个新元素
  push(element: T) {
    let current: Node<T>
    const node = new Node<T>(element)
    if (this.head == null) {
      this.head = node
    } else {
      current = this.head.next
      while () {

      }
    }
  }
  // 向链表的特定位置插入一个新元素
  insert(element, position) {
    //
  }
  // 返回链表中特定位置的元素。如果链表中不存在这样的元素，则返回 undefined
  getElementAt(index) {}
  // 从链表中移除一个元素
  remove(element) {}
  // 返回元素在链表中的索引。如果链表中没有该元素则返回-1。
  indexOf(element) {}
  // 从链表的特定位置移除一个元素
  removeAt(index) {}
  // 如果链表中不包含任何元素，返回 true，如果链表长度大于 0则返回 false。
  isEmpty() {}
  // 返回链表包含的元素个数，与数组的 length 属性类似。
  size() {}
  getHead() {
    return this.head
  }

  /**
   * 返回表示整个链表的字符串。由于列表项使用了 Node 类，就需要重写继
   * 承自 JavaScript 对象默认的 toString 方法，让其只输出元素的值。
   */
  toString() {}
}
