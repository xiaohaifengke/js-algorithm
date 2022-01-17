interface Items<T> {
  [index: number]: T
}

export class Queue<T> {
  private count = 0
  private lowestCount = 0
  private items: Items<T> = {}

  enqueue(...elements: T[]) {
    elements.forEach((element) => {
      this.items[this.count] = element
      this.count++
    })
  }

  dequeue(): T {
    const element = this.items[this.lowestCount]
    Reflect.deleteProperty(this.items, this.lowestCount)
    this.lowestCount++
    return element
  }

  peek(): T {
    return this.items[this.lowestCount]
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
