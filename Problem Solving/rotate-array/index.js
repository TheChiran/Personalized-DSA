/**
 * 
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 */

const rotateArray = (nums, k) => {
  /**
   * O(N) T
   * O(N) S
   */
  const arrayValuesWithIndex = new Map();

  for (let idx = 0; idx < nums.length; idx++) {
    arrayValuesWithIndex.set(idx, nums[idx]);
  }
  console.log("map value: ", arrayValuesWithIndex);
  for (let idx = 0; idx < nums.length; idx++) {
    let nextIdx = idx + k;
    nextIdx = nextIdx % nums.length;
    nums[nextIdx] = arrayValuesWithIndex.get(idx);
  }

  return nums;
};

const reverseArray = (nums, start, end) => {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;

    start++;
    end--;
  }

  return nums;
};

const rotateArrayWithReverse = (nums, k) => {
  // Idea is to reverse it 3 times
  // 1) Reverse all
  // 2) reverse first k elements
  // 2) reverse
  let toRotate = k % nums.length; // This is to resolve error for exceeded / index out of bounds error
  /**
   * example: k = 3, nums = [1,2]
   * rotate1-> [2,1]
   * rotate2-> (0,2) -> [2,1,undefined] -> as there is no index as 2
   * for this -> k % nums.length (3,2) -> 1
   */

  reverseArray(nums, 0, nums.length - 1);
  reverseArray(nums, 0, toRotate - 1);
  reverseArray(nums, toRotate, nums.length - 1);

  return nums;
};
console.log(`Rotate array 3 times: `, rotateArrayWithReverse([-1, 1], 1));
