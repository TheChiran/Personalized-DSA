// LIFO -> Last In First Out
/**
 * Functionalities
 * 1. Push
 * 2. Pop
 * 3. Peak
 */

// Stack using array
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class ArrayStack {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  push(value) {
    this.items.push(value);
    this.length++;
    return this;
  }

  pop() {
    if (this._isEmpty()) return null;

    const popValue = this.items.pop();
    this.length--;

    return popValue;
  }

  peak() {
    if (this._isEmpty()) return null;

    return this.items[this.items.length - 1];
  }

  _isEmpty() {
    return this.length === 0;
  }
}

// Stack using Linked List
class LinkedListStack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    const newValue = new Node(value);
    if (this.length === 0) {
      this.top = newValue;
      this.bottom = newValue;
    } else {
      const headingPointerNode = this.top;
      this.top = newValue;
      this.top.next = headingPointerNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.top) return null;

    if (this.top === this.bottom) {
      this.top = null;
      this.bottom = null;
    }

    // const headingPointerNode = this.top;
    this.top = this.top.next;

    this.length--;
    return this;
  }

  peak() {
    if (this._isEmpty()) return null;

    return this.top;
  }

  _isEmpty() {
    return this.bottom === null;
  }
}
