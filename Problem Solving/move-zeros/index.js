/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
*/
var moveZeroes = function (nums) {
  for (let idx = 0; idx < nums.length; idx++) {
    for (let idx1 = idx + 1; idx1 < nums.length; idx1++) {
      if (nums[idx] === 0) {
        nums[idx] = nums[idx1];
        nums[idx1] = 0;
      }
    }
  }
};

const moveZerosImproved = (nums) => {
  for (idx = 0; idx < nums.length - 2; idx++) {
    if (nums[idx] === 0) {
      if (nums[idx + 1] !== 0) {
        [nums[idx], nums[idx + 1]] = [nums[idx + 1], nums[idx]];
        continue;
      } else if (nums[idx + 2] !== 0) {
        [nums[idx], nums[idx + 2]] = [nums[idx + 2], nums[idx]];
        continue;
      }
    }
  }

  return nums;
};

const moveZeroesTwoPointer = (nums) => {
  let low = 0;
  let high = low + 1;

  while (high <= nums.length - 1) {
    if (nums[low] !== 0) {
      low++;
      high++;
    } else {
      if (nums[high] !== 0) {
        [nums[low], nums[high]] = [nums[high], nums[low]];
        low++;
      }

      high++;
    }
  }

  return nums;
};

console.log(
  "move zeros result: ",
  moveZeroesTwoPointer([0, 1, 0, 0, 2, 3, 12, 15])
);
