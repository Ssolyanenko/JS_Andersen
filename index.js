class Node {
  constructor(data, prev) {
    this.data = data;
    this.prev = prev;
  }
}

class Stack {
  constructor(maxSize = 10) {
    if (typeof maxSize !== "number" || maxSize < 0) {
      throw new Error("Ошибка!");
    } else {
      this.maxSize = maxSize;
    }

    this.curentSize = 0;
    this.top = null;
  }

  push(elem) {
    if (this.curentSize === this.maxSize) {
      throw new Error("Ошибка!");
    }

    const newNode = new Node(elem);

    newNode.prev = this.top = null;
    this.curentSize++;
    this.top = newNode;
  }

  pop() {
    if (!this.curentSize === 0) {
      throw new Error("Oшибка!");
    }

    const deleted = this.top;

    this.top = this.top.prev || null;
    this.curentSize--;

    return deleted.data;
  }
  peek() {
    return this.curentSize === 0 ? null : this.top.data;
  }
  isEmpty() {
    return this.curentSize === 0;
  }

  toArray() {
    const arr = [];

    let current = this.top;

    while (current) {
      arr.unshift(current.data);
      current = current.prev;
    }

    return arr;
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

