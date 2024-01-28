/**
 * @source {AlgoExpert}
 * @title {Find Closest Value In BST}
 * @description {
 *  
  Write a function that takes in a Binary Search Tree (BST) and a target integer
  value and returns the closest value to that target value contained in the BST.

  You can assume that there will only be one closest value.

  Each <span>BST</span> node has an integer <span>value</span>, a
  <span>left</span> child node, and a <span>right</span> child node. A node is
  said to be a valid <span>BST</span> node if and only if it satisfies the BST
  property: its <span>value</span> is strictly greater than the values of every
  node to its left; its <span>value</span> is less than or equal to the values
  of every node to its right; and its children nodes are either valid
  <span>BST</span> nodes themselves or <span>None</span> / <span>null</span>.

  tree =            10
                5           15
             2     5     13     22
           1                14

  target = 12
  output= 13         
 * }
 */
function findClosestValueInBst(tree, target) {
  return bstClosetValueFindHelper(tree, target, tree.value);
}

function bstClosetValueFindHelper(tree, target, closet) {
  if (tree === null) return closet;

  if (Math.abs(target - closet) > Math.abs(target - tree.value))
    closet = tree.value;

  if (target < tree.value)
    return bstClosetValueFindHelper(tree.left, target, closet);

  if (target > tree.value)
    return bstClosetValueFindHelper(tree.right, target, closet);

  return closet;
}

function findClosetValueBstIterative(tree, target) {
  let currentNode = tree;
  let closet = tree.value;

  while (currentNode !== null) {
    if (Math.abs(target - closet) > Math.abs(target - currentNode.value))
      closet = currentNode.value;

    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }

  return closet;
}
