export class Node<T> {
  public element: T
  public next: Node<T> | undefined
  constructor(element: T, next?: Node<T> | undefined) {
    this.element = element
    this.next = next
  }
}

export class DoublyNode<T> extends Node<T> {
  public prev: DoublyNode<T> | undefined = undefined
  public next: DoublyNode<T> | undefined = undefined

  constructor(
    element: T,
    next?: DoublyNode<T> | undefined,
    prev?: DoublyNode<T> | undefined
  ) {
    super(element, next)
    this.prev = prev
  }
}
