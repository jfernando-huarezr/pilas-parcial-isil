export default class Stack {
  constructor() {
    this.items = []
  }

  push(value) {
    this.items.push(value)
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  size() {
    return this.items.length
  }

  isEmpty() {
    return this.items.length === 0
  }
}
