export class Node<T> {
  public element: T
  public next: T | undefined
  constructor(element: T) {
    this.element = element
    this.next = undefined
  }
}
