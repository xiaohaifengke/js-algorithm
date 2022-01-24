export class Node<T> {
  public element: T
  public next: Node<T> | undefined
  constructor(element: T) {
    this.element = element
    this.next = undefined
  }
}
