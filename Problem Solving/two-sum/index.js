/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // n^2
  for (let idx = 0; idx < nums.length; idx++) {
    // n
    for (let idx2 = 0; idx2 < nums.length; idx2++) {
      // n
      if (nums[idx] + nums[idx2] === target) return [idx, idx2];
    }
  }
};

function twoSumSorted(nums, target) {
  let [lowerIdx, higherIdx] = [0, nums.length - 1];

  while (lowerIdx < higherIdx) {
    if (numbers[lowerIdx] + nums[higherIdx] === target) {
      return [lowerIdx, higherIdx];
    } else if (numbers[lowerIdx] + numbers[higherIdx] < target) {
      lowerIdx++;
    } else {
      higherIdx--;
    }
  }
}
/* 
1) Approach: For Loop
loop first
again loop ->
check if loop1->value and loop two value adds the target

2) if sorted -> two pointers


*/
function twoSumMap(nums, target) {
  const map = new Map();

  for (let idx = 0; idx < nums.length; idx++) {
    const value = nums[idx];
    const compliment = target - value;
    const sumIdx = map.get(compliment);

    const isTarget = map.has(compliment);

    if (isTarget) return [idx, sumIdx];

    map.set(value, idx);
  }

  return [-1, -1];
}
// Inputs
const numbers = [2, 7, 11, 15];
console.log(twoSumMap(numbers, 9));
