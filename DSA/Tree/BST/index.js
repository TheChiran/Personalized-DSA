class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) return null;

    let currentNode = this.root;

    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return currentNode;
      }
    }

    return null;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;

            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  breadthFirstSearch() {
    // Root -> left, right
    //    9
    // 4      20
    //1   6  15   170
    // BFS [9,4,20,1,6,15,170]

    let currentNode = this.root;
    const to_visit_queue = [];
    const visited_nodes = [];

    to_visit_queue.push(currentNode);

    while (to_visit_queue.length > 0) {
      currentNode = to_visit_queue.shift();
      visited_nodes.push(currentNode.value);

      if (currentNode.left) {
        to_visit_queue.push(currentNode.left);
      }

      if (currentNode.right) {
        to_visit_queue.push(currentNode.right);
      }
    }

    return visited_nodes;
  }

  breadthFirstSearchRecursive(queue, list) {
    if (!queue.length) {
      return list;
    }

    let currentNode = queue.shift();
    list.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    return this.breadthFirstSearchRecursive(queue, list);
  }

  depthFirstSearch() {
    //    101
    // 33     105
    // Preorder -> 33 (left child) ->  101 (root) -> 105 (right)
    // Inorder -> 101 -> 33 -> 105
    // Postorder -> 33 -> 105 -> 101
  }

  DFSInorder() {
    return traverseInOrder(this.root, []);
  }

  traverseInOrder(node, list) {
    if (node.left) {
      this.traverseInOrder(node.left, list);
    }

    list.push(node.value);

    if (node.right) {
      this.traverseInOrder(node.right, list);
    }

    return list;
  }

  DFSPreorder() {
    return traversePreOrder(this.root, []);
  }

  traversePreOrder(node, list) {
    list.push(node.value);

    if (node.left) {
      this.traversePreOrder(node.left, list);
    }

    if (node.right) {
      this.traversePreOrder(node.right, list);
    }

    return list;
  }

  DFSPostorder() {
    return traversePostOrder(this.root, []);
  }

  traversePostOrder(node, list) {
    if (node.left) {
      this.traversePostOrder(node.left, list);
    }

    if (node.right) {
      this.traversePostOrder(node.right, list);
    }

    list.push(node.value);

    return list;
  }
}

const bst = new BinarySearchTree();
bst.insert(9);
bst.insert(20);
bst.insert(4);
bst.insert(1);
bst.insert(6);
bst.insert(15);
// console.log(bst.insert(170));
// console.log("BSF traversal: ", bst.breadthFirstSearch());
console.log("BSF traversal: ", bst.breadthFirstSearchRecursive([bst.root], []));
// console.log("value of lookup: ", bst.lookup(100));
