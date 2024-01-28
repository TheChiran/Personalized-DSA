// URL: https://leetcode.com/problems/linked-list-cycle/description/

function cycleNaive(head) {
    if(!head) return false;
    
    let currentNode = head;
    let seenNodes = new Set();

    while(!seenNodes.has(currentNode)) {
        if(currentNode.next === null) return false;
        seenNodes.add(currentNode);
        currentNode = currentNode.next;
    }

    return true;
}

function detectCycleFloyds(head) {
    if(!head) return false;

    let slow = head, fast = head;
    // 1) Set two pointer fast and slow as head

    // 2) Run || check until fast or second pointer is not null
    while(fast && fast.next) {
        slow = slow.next;
        // 3) Set slow pointer with 1 step
        fast = fast.next.next;
        // 4) Set fast pointer with 2 step
        
        if(fast === slow) return true;
        // 5) return true, if fast and slow pointer is same
    }

    return false;
}