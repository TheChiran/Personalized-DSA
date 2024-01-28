// URL: https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/description/

function flatten(head) {
    // 1) Check if head is null, return head
    if(!head) return head;

    // 2) Initialize currentNode as head
    let currentNode = head;

    // 3) Run until currentNode is not null
    while(currentNode !== null) {
        // 4 ) check if no child, if so change currentNode with currentNode.next
        if(currentNode.child === null) {
            currentNode = currentNode.next;
        } else {
            // 5) Set value for tail or to get last value of child
            let tail = currentNode.child;
            //6) Run until tail is not null
            while(tail.next !== null) {
                tail = tail.next;
            }

            // 7) set tail next, that is next value of currentNode
            tail.next = currentNode.next;

            if(currentNode.next !== null) {
                tail.next.prev = tail;
            }

            currentNode.next = currentNode.child;
            currentNode.next.prev = currentNode;
            currentNode.child = null;
        }
    }

    return head;
}