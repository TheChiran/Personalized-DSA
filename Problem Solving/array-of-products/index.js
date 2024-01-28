// Link: https://www.algoexpert.io/questions/array-of-products

// Array = [5,1,4,8] -> [8,40,10,20]

const arrayOfProductSolutionOne = (array) => {
  const arrayOfProducts = new Array(array.length).fill(1);
  for (let idx = 0; idx < array.length; idx++) {
    let sumOfProduct = 1;
    for (let idx1 = 0; idx1 < array.length; idx1++) {
      if (idx !== idx1) {
        sumOfProduct *= array[idx1];
      }
      arrayOfProducts[idx] = sumOfProduct;
    }
  }

  return arrayOfProducts;
};

// If we can solve with division

const arrayOfProductSolutionDivision = (array) => {
  const arrayOfProducts = new Array(array.length).fill(0);
  let totalSumOfProducts = 1;

  for (const value of array) {
    if (totalSumOfProducts !== 0) {
      totalSumOfProducts *= value;
    }
  }

  //   console.log("total sum of product: ", totalSumOfProducts);
  for (let idx = 0; idx < array.length; idx++) {
    if (totalSumOfProducts !== 0) {
      console.log("value: ", totalSumOfProducts);
      arrayOfProducts[idx] = totalSumOfProducts / array[idx];
    }
  }

  return arrayOfProducts;
};

const arrayOfProductSolutionTwo = (array) => {
  const productOfArray = new Array(array.length).fill(1);
  const leftArray = new Array(array.length).fill(1);
  const rightArray = new Array(array.length).fill(1);

  let leftProductValue = 1;

  for (let idx = 0; idx < array.length; idx++) {
    leftArray[idx] = leftProductValue;
    leftProductValue *= array[idx];
  }

  let rightProductValue = 1;
  for (let rIdx = array.length - 1; rIdx > -1; rIdx--) {
    rightArray[rIdx] = rightProductValue;
    rightProductValue *= array[rIdx];
  }

  for (let idx = 0; idx < array.length; idx++) {
    productOfArray[idx] = leftArray[idx] * rightArray[idx];
  }

  return productOfArray;
};

console.log(arrayOfProductSolutionTwo([5, 1, 4, 2]));
