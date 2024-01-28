/**
 * Given an integer array nums, find the 
subarray
 with the largest sum, and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // O(N^2) T
  // O(1) S
  let max_sum = -Infinity;

  for (let idx = 0; idx < nums.length; idx++) {
    let current_sum = 0;
    for (let idx1 = idx; idx1 < nums.length; idx1++) {
      current_sum += nums[idx1];

      if (current_sum > max_sum) {
        max_sum = current_sum;
      }
    }
  }

  return max_sum;
};

const maxSubArrayKadanes = (nums) => {
  // O(N) T
  // O(1) S
  let max_sum = -Infinity;
  let current_sum = 0;

  for (const value of nums) {
    current_sum += value;

    if (current_sum > max_sum) max_sum = current_sum;

    if (current_sum < 0) current_sum = 0;
  }

  return max_sum;
};

console.log("max sum of [5,4,-1,7,8]: ", maxSubArrayKadanes([5, 4, -1, 7, 8]));
