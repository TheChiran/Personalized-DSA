function validateBst(tree) {
  return bstValidateHelper(tree, -Infinity, Infinity);
}

function bstValidateHelper(tree, minValue, maxValue) {
  if (tree === null) return true;
  if (tree.value < minValue || tree.value >= maxValue) return false;
  const leftIsValid = bstValidateHelper(tree.left, minValue, tree.value);
  return leftIsValid && bstValidateHelper(tree.right, tree.value, maxValue);
}
