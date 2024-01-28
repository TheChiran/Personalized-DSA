function containerWithMostWaterBruteForceSolution(numbers) {
    let a, b;
    let maxArea = 0;

    for(let idx=0;idx<numbers.length - 1;idx++) {
        a = numbers[idx];

        for(let idx1=idx+1;idx1<numbers.length;idx1++) {
            b = numbers[idx1];

            const newArea = Math.min(a,b) * (idx1 - idx);

            if(newArea > maxArea) maxArea = newArea;
        }
    }

    return maxArea;
}

function containerWithMostWaterTwoPointerSolution(numbers) {
    let maxArea = 0;
    let a = 0;
    let b = numbers.length - 1;

    while(a < b) {
        const newArea = Math.min(numbers[a],numbers[b]) * (b-a);
        maxArea = Math.max(maxArea,newArea);

        a++;
    }

    return maxArea;
}

const numbers = [7,1,2,3,9];
console.log('Container with most water area: ', containerWithMostWaterTwoPointerSolution(numbers));