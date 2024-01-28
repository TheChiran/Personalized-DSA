/**
 * https://leetcode.com/problems/reverse-linked-list/
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 *  Input: head = [1,2,3,4,5]
 *  Output: [5,4,3,2,1]
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null) return [];

  let first = head;
  let second = head.next;

  while (second) {
    let temp = second.next;
    second.next = first;
    first = second;
    second = temp;
  }

  head.next = null;
  head = first;
  return head;
};
