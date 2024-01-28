// URL: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

function binarySearch(nums, left, right, target) {
    while(left <= right) {
        mid = Math.floor((left + right)/2);

        if(target === nums[mid]) return mid;
        else if(target > nums[mid]) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
}


function searchRange(nums, target) {
    if(nums.length === 0) return [-1, -1];
    // 1) Find first position, any position that was found firstly using binary search
    const firstPosition = binarySearch(nums, 0, nums.length - 1, target);
    // 2) If first position is unable to find, thus second one is also
    if(firstPosition === -1) return [-1, -1];
    // 3) initialize startPosition, endPosition, value of startPosition and endPosition; Initially all are supposed to be same
    let startPosition = firstPosition,endPosition = firstPosition,
        startPositionValue = firstPosition, endPositionValue = firstPosition;

    while(startPosition !== -1) {
        startPositionValue = startPosition;
        startPosition = binarySearch(nums, 0, startPosition - 1, target);
    }    

    startPosition = startPositionValue;

    while(endPosition !== -1) {
        endPositionValue = endPosition;
        endPosition = binarySearch(nums, endPosition + 1, nums.length - 1, target);
    }    

    endPosition = endPositionValue;

    return [startPosition, endPosition];
}