/* 
* Question: Given an array off integers, return the indices of the two numbers that add up to a given target
*/

function twoSumBruteSolution(numbers, target) {
    if(numbers.length === 0 || numbers.length === 1) return null;

    for(let idx=0;idx<numbers.length-1;idx++) {
        for(let idx1=idx+1;idx1<numbers.length;idx1++) {
            if(numbers[idx] + numbers[idx1] === target) return [idx, idx1];
        }
    }

    return null;
}

function twoSumTwoPointerSolution(numbers, target) {
    if(numbers.length === 0 || numbers.length === 1) return null;

    let p1 = 0;
    let p2;
    
    while(p1 < numbers.length - 1){
        p2 = p1 + 1;
        const numberToFind = target - numbers[p1];

        while(p2 < numbers.length) {
            if(numberToFind === numbers[p2]) return [p1,p2];

            p2++;
        }

        p1++;
    }

    return null;
}

function twoSumMapSolution(numbers, target) {
    if(numbers.length === 0 || numbers.length === 1) return null;

    const checkedNumbers = new Map();

    for(let idx = 0;idx<numbers.length;idx++) {
        if(checkedNumbers.has(numbers[idx])) return [checkedNumbers.get(numbers[idx]), idx];
        const numberToFind = target - numbers[idx];
        checkedNumbers.set(numberToFind, idx);
    }

    return null;
}

const numbers = [1,3,7,9,2];

console.log(twoSumMapSolution(numbers, 11));