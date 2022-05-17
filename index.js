
class Stack {
  constructor(maxSize) {
    this.items = [];
    if (maxSize !== null) {
      this.maxSize = maxSize;
    } else {
      this.maxSize = 10;
    }
  }

  push(element) {
    if (this.items.length === this.maxSize) {
      throw new Error("Ошибка!");
    } else {
      this.items.push(element);
    }
  }

  pop() {
    if (this.items.length === 0) {
      throw new Error("Ошибка!");
    } else {
      return this.items.pop();
    }
  }

  peek() {
    if (this.items.length === 0) {
      return null;
    } else {
      return this.items[this.items.length - 1];
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }
  toArray() {
    return this.items;
  }

  static fromIterable(iterable) {
    if (iterable[Symbol.iterator] === undefined) {
      throw new Error("Ошибка!");
    }

    let size = 0;

    for (let item of iterable) {
      size++;
    }

    const stack = new Stack(size);

    for (let item of iterable) {
      stack.push(item);
    }

    return stack;
  }
}

module.exports = { Stack };
