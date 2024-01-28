// URL: https://replit.com/@ZhangMYihua/Find-kth-largest-element-Quicksort#index.js
// Ques: https://leetcode.com/problems/kth-largest-element-in-an-array/description/

function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function getPartition(nums,left,right) {
    let partitionIndex = left;

    for(let j=left;j<right;j++) {
        if(nums[j] <= nums[right]) {
            partitionIndex++;
        }
    }

    return partitionIndex - 1;
}

function quickSelect(nums, left, right, indexToFind) {
    const partitionIndex = getPartition(nums, left, right);

    if(partitionIndex === indexToFind) {
        return nums[partitionIndex];
    } else if(indexToFind < partitionIndex) {
        return quickSelect(nums, left, partitionIndex - 1, indexToFind);
    } else {
        return quickSelect(nums, partitionIndex + 1, right,  indexToFind);
    }
}

function findKthLargest (nums, k) {
    const indexToFind = nums.length - k;
    return quickSelect(nums, 0, nums.length - 1, indexToFind);
};