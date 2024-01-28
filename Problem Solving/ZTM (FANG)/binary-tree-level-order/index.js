// URL: https://leetcode.com/problems/binary-tree-level-order-traversal/description/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder1 = function(root) { // Personal
    if(!root) return [];
    let final_result = [], current_level_count = 0, 
    level_max_count = 1, items_queue = [], 
    current_level_items = [], currentNode;
    items_queue.push(root);
    
    while(items_queue.length) {
        currentNode = items_queue.unshift();
        if(currentNode.left) items_queue.push(currentNode.left);
        if(currentNode.right) items_queue.push(currentNode.right);

        current_level_items.push(currentNode.val);

        ++current_level_count;

        if(level_max_count === current_level_count) {
            current_level_count = 0;
            level_max_count = items_queue.length;
            final_result.push(current_level_items);
            current_level_items = [];
        }
    }

    return final_result;
};

function levelOrder(root) { // ZTM
    if(!root) return [];
    const result = [];
    const queue = [root];

    while(queue.length) {
        const currentLevelValues = [];
        let length = queue.length, count = 0;
        
        while(count < length) {
            const currentNode = queue.shift();
            currentLevelValues.push(currentNode.val);

            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);

            count++;
        }

        result.push(currentLevelValues);
    }

    return result;
}
