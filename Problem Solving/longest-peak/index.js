function longestPeak(array) {
  // Write your code here.
  // [1,2,3,3,4,0,10,6,5,-1,-3,2,3]
  let longestPeakLength = 0;
  let idx = 1;

  while (idx < array.length - 1) {
    const isPeak = array[idx - 1] < array[idx] && array[idx + 1] < array[idx];

    if (!isPeak) {
      idx++;
      continue;
    }

    let leftIdx = idx - 2;

    while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
      leftIdx--;
    }

    let rightIdx = idx + 2;

    while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
      rightIdx++;
    }

    const currentPeakLength = rightIdx - leftIdx - 1;

    longestPeakLength = Math.max(longestPeakLength, currentPeakLength);

    idx = rightIdx;
  }

  return longestPeakLength;
}
