// 10-->5-->16
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const listArray = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      listArray.push(currentNode.value);
      currentNode = currentNode.next;
    }

    for (const value of listArray) {
      console.log("node value: ", value);
    }
  }

  _insertAtStart(newNode) {
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
    return this;
  }

  _traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  _insertAtPosition(index, newNode) {
    const currentNode = this._traverseToIndex(index - 1);

    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;

    return this;
  }

  insert(index, value) {
    if (index >= this.length) return this.append(value);

    if (index === 0) return this.prepend(value);

    const newNode = new Node(value);

    return this._insertAtPosition(index, newNode);
  }

  remove() {
    vite;
  }

  removeWithIndex(index) {
    console.log("length: ", this.length);
    if (index <= 0) {
      const newHead = this.head.next;
      this.head = newHead;
      this.length--;

      return this;
    }

    if (index >= this.length) {
      const newTailNode = this._traverseToIndex(this.length - 2);
      newTailNode.next = null;
      this.tail = newTailNode;

      this.length--;
      return this;
    }

    const leaderNode = this._traverseToIndex(index - 2);
    leaderNode.next = leaderNode.next.next;

    this.length--;
    return this;
  }

  reverse() {
    // Check if there is only one
    if (!this.head.next) return this.head;

    // if(this.length === 0) return this.head; // Both are same to check if there is only one value or more

    let first = this.head;
    let second = this.head.next;

    while (second) {
      let temp = second.next; // temp -> third or next to be second
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(1, 2);
myLinkedList.insert(2, 5);
console.log("\n Linked list before reverse: \n");
myLinkedList.printList();
console.log("\n Linked list after reverse: \n");
myLinkedList.reverse();
myLinkedList.printList();
// myLinkedList.removeWithIndex(-1);
// console.log("\nAfter removing===> \n");
// myLinkedList.printList();
// console.log(myLinkedList);
