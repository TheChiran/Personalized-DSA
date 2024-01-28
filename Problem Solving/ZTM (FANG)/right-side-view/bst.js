// URL: https://leetcode.com/problems/binary-tree-right-side-view/description/

function rightSideView(root) {
    if(!root) return [];
    const res = [], queue = [root];

    while(queue.length) {
        let count = 0, length = queue.length;

        while(count < length) {
            const currentNode = queue.shift();

            if(count === length - 1) {
                res.push(currentNode.val);
            }

            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);

            count++;
        }
    }

    return res;
}

function dfs(node, currentLevel, result) {
    // NRL (Node Right Left)
    if(!node) return;
    if(currentLevel >= result.length) result.push(node.val);

    if(node.right) dfs(node.right, currentLevel + 1, result);

    if(node.left) dfs(node.left, currentLevel + 1, result);
}

function rightSideViewDFS(root) {
    const result = [];

    dfs(root, 0, result);

    return result;
}

