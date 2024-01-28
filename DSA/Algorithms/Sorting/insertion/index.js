// Insertion sort
// 6 5 3 1 8 7 2 4
/**
 * smallest = 6 -> idx=0;
 * smallest = 5; -> idx=1; ->
 */
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for (let idx = 0; idx < array.length; idx++) {
    let currentSmallest = array[idx];
    let newIdxForSmallest = idx;
    let prevIdxForSmallest = idx;

    let currentIdx = idx;

    while (currentIdx > -1) {
      if (currentSmallest < array[currentIdx]) {
        newIdxForSmallest = currentIdx;
      }
      currentIdx--;
    }

    array[prevIdxForSmallest] = array[newIdxForSmallest];
    array[newIdxForSmallest] = currentSmallest;
  }

  return array;
}

console.log("insertion sort: ", insertionSort([6, 5, 3, 1, 8, 7, 2, 4]));
