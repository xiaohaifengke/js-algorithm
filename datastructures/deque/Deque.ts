interface Items<T> {
  [index: number]: T
}
export class Deque<T> {
  private count = 0
  private lowestCount = 0
  private items: Items<T> = {}

  addFront(element: T) {
    if (this.isEmpty()) {
      this.addBack(element)
    } else {
      this.items[--this.lowestCount] = element
    }
  }

  addBack(element: T) {
    this.items[this.count++] = element
  }

  removeFront(): T {
    const element = this.peekFront()
    Reflect.deleteProperty(this.items, this.lowestCount++)
    return element
  }

  removeBack(): T {
    const element = this.peekBack()
    Reflect.deleteProperty(this.items, this.count-- - 1)
    return element
  }

  /**
   * returns the first element of the deque
   * @method peekFront
   * @for Deque
   * @returns { any }
   */
  peekFront() {
    return this.items[this.lowestCount]
  }

  peekBack() {
    return this.items[this.count - 1]
  }

  clear(): void {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  size(): number {
    return this.count - this.lowestCount
  }

  isEmpty(): boolean {
    return this.size() === 0
  }

  toString(): string {
    if (this.isEmpty()) {
      return ''
    }
    let str = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      str = `${str},${this.items[i]}`
    }
    return str
  }
}
