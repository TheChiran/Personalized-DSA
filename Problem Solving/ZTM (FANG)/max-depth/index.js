function maxDepth(root){
    if(root === null) return 0;

    return dfs(root);
}

function dfs(root) {
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);

    const height = Math.max(left, right);

    return height + 1;
}