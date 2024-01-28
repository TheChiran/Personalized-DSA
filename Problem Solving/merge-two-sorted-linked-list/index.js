/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let smallest, currentNode1, currentNode2;

  if (list1.value > list2.value) {
    smallest = list2.value;
    currentNode2 = list2.next;
  } else {
    smallest = list1.value;
    currentNode1 = list1.next;
  }

  const newHead = new ListNode(smallest);
  let currentNode = newHead;

  while (currentNode1 || currentNode2) {
    if (currentNode1.value > currentNode2.value) {
      currentNode.next = currentNode2;
      currentNode = currentNode2;
      currentNode2 = currentNode2.next;
    } else {
      currentNode.next = currentNode1;
      currentNode = currentNode1;
      currentNode1 = currentNode1.next;
    }
  }

  return newHead;
};
