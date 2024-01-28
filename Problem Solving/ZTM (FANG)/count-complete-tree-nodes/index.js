// URL: https://leetcode.com/problems/count-complete-tree-nodes/description/

var countNodes = function(root) {
    if(!root) return 0;

    const queue = [root];
    let totalNode = 0;

    while(queue.length) {
        totalNode++;
        const currentNode = queue.shift();

        if(currentNode.left) queue.push(currentNode.left);
        if(currentNode.right) queue.push(currentNode.right);
    }

    return totalNode;
};