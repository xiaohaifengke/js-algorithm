import { DoublyNode } from '@/models/linked-list-models'
import { defaultEquals } from '@/utils'
import { LinkedList } from './LinkedList'
/**
 * TODO: 增加 node 的泛型约束，
 * 使得像getElementAt此类的方法推断出的返回值为此泛型。
 * FIXME: 当前仅有T泛型是不够的
 */
export class DoublyLinkedList<T> extends LinkedList<T> {
  protected count = 0
  protected head: DoublyNode<T> | undefined = undefined
  protected tail: DoublyNode<T> | undefined = undefined
  constructor(protected equalsFn = defaultEquals) {
    super(equalsFn)
  }

  push(element: T) {
    const node = new DoublyNode<T>(element)
    if (this.head == null) {
      this.head = node
      this.tail = node
    } else {
      this.tail!.next = node
      node.prev = this.tail
      this.tail = node
    }
    return ++this.count
  }

  insert(element: T, index: number) {
    if (index >= 0) {
      const node = new DoublyNode(element)
      if (index === 0) {
        if (this.count === 0) {
          this.head = node
          this.tail = node
        } else {
          this.head!.prev = node
          node.next = this.head
          this.head = node
        }
      } else if (index >= this.count) {
        this.tail!.next = node
        node.prev = this.tail
        this.tail = node
      } else {
        const previous = this.getElementAt(index - 1)
        node.prev = previous
        node.next = previous?.next
        previous!.next!.prev = node
        previous!.next = node
      }

      this.count++
      return true
    }
    return false
  }

  getElementAt(index: number) {
    if (index >= 0 && index <= this.count) {
      let node: DoublyNode<T> | undefined
      if (index >= this.count / 2) {
        node = this.tail
        for (let i = this.count - 1; i > index && node != null; i--) {
          node = node.prev
        }
      } else {
        node = this.head
        for (let i = 0; i < index && node != null; i++) {
          node = node.next
        }
      }
      return node
    }
  }
}

// const a = new DoublyLinkedList<string>()
// a.tail
