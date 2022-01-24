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
    let lastNode: Node<T>
    const node = new Node<T>(element)
    if (this.head == null) {
      this.head = node
    } else {
      lastNode = this.head
      while (lastNode.next != null) {
        lastNode = lastNode.next
      }
      lastNode.next = node
    }
    return ++this.count
  }
  // 向链表的特定位置插入一个新元素
  insert(element: any, index: number) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      if (index === 0) {
        node.next = this.head
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1)!
        node.next = previous.next
        previous.next = node
      }
      this.count++
      return true
    }
    return false
  }
  // 返回链表中特定位置的元素。如果链表中不存在这样的元素，则返回 undefined
  getElementAt(index: number) {
    if (index >= 0 && index <= this.count) {
      let node: Node<T> | undefined = this.head
      for (let i = 0; i < index && node != null; i++) {
        node = node.next
      }
      return node
    }
  }
  // 从链表中移除一个元素
  remove(element: any) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }
  // 返回元素在链表中的索引。如果链表中没有该元素则返回-1。
  indexOf(element: any) {
    let current = this.head
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }
  // 从链表的特定位置移除一个元素
  removeAt(index: number) {
    let current = this.head!
    // 检查越界值
    if (index >= 0 && index < this.count) {
      if (index === 0) {
        this.head = current.next
      } else {
        const previous = this.getElementAt(index - 1)!
        current = previous.next!
        previous.next = current.next
      }
      this.count--
      return current
    }
  }
  // 返回链表包含的元素个数，与数组的 length 属性类似。
  size() {
    return this.count
  }
  // 如果链表中不包含任何元素，返回 true，如果链表长度大于 0则返回 false。
  isEmpty() {
    return this.size() === 0
  }
  getHead() {
    return this.head
  }

  /**
   * 返回表示整个链表的字符串。由于列表项使用了 Node 类，就需要重写继
   * 承自 JavaScript 对象默认的 toString 方法，让其只输出元素的值。
   */
  toString() {
    let str = ''
    let current = this.head
    for (let i = 0; i < this.count && current != null; i++) {
      str += `${i === 0 ? '' : ','}${current.element}`
      current = current.next
    }
    return str
  }
}
