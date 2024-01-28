// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let currentNode = this;

    while (currentNode !== null) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new BST(value);
          break;
        } else {
          currentNode = currentNode.left;
        }
      }

      if (value > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = new BST(value);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }

    return this;
  }

  contains(value) {
    let currentNode = this;

    while (currentNode !== null) {
      if (currentNode.value === value) return true;

      if (value < currentNode.value) {
        currentNode = currentNode.left;
      }

      if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  remove(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    return this;
  }
}
