// Problem link: https://leetcode.com/problems/contains-duplicate/description/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  // O(n^2) T
  // O(1) S
  if (nums.length === 0) return false;

  for (let idx = 0; idx < nums.length; idx++) {
    for (let idx1 = idx + 1; idx1 < nums.length; idx1++) {
      if (nums[idx] === nums[idx1]) return true;
    }
  }

  return false;
};

const improvedContainsDuplicate = function (nums) {
  // O(n) TS
  if (nums.length === 0) return false;

  const numbers = new Map();

  for (const num of nums) {
    if (numbers.has(num)) return true;

    numbers.set(num, true);
  }

  return false;
};

const containsDuplicateImproved = (array) => {
  // Contains repeatation of a value
  for (let value of array) {
    const absValue = Math.abs(value);
    if (array[absValue - 1] < 0) return absValue;

    array[absValue - 1] *= -1;
  }

  return -1;
};

console.log(
  "contains duplicate: ",
  containsDuplicateImproved([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])
);
