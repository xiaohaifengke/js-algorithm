export class Stack<T> {
  constructor(protected items: T[] = []) {
    this.items = items
  }
  push(...elements: T[]): number {
    return this.items.push(...elements)
  }
  pop(): T | undefined {
    return this.items.pop()
  }
  peek(): T {
    return this.items[this.items.length - 1]
  }
  isEmpty(): boolean {
    return this.items.length === 0
  }
  clear(): void {
    this.items = []
  }
  size(): number {
    return this.items.length
  }
}
