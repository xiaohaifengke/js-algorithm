import { DoublyNode } from '@/models/linked-list-models'
import { defaultEquals } from '@/utils'
import { LinkedList } from './LinkedList'

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
    return false
  }
}

// const a = new DoublyLinkedList<string>()
// a.tail
