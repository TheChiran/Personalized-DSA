class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length++;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;

    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  traverseToIndex() {}

  insert(index, value) {}

  remove(index) {}

  printList() {
    let currentNode = this.head;

    while (currentNode !== null) {
      console.log("\nvalue-> ", currentNode.value);
      currentNode = currentNode.next;
    }
  }

  printFromLast() {
    let currentNode = this.tail;

    while (currentNode !== null) {
      console.log("\nvalue-> ", currentNode.value);
      currentNode = currentNode.prev;
    }
  }
}

const doublyLinkedList = new DoublyLinkedList(5);
doublyLinkedList.append(6);
doublyLinkedList.append(7);
doublyLinkedList.prepend(4);
doublyLinkedList.prepend(1);

console.log("\nPrint list from first: \n");
doublyLinkedList.printList();

console.log("\nPrint list from last: \n");
doublyLinkedList.printFromLast();
