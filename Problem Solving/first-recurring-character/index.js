//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// function firstRecurringCharacter(array) {
//   // Using for loop
//   for (let idx = 0; idx < array.length; idx++) {
//     for (let innerIdx = idx + 1; innerIdx < array.length; innerIdx++) {
//       if (array[idx] === array[innerIdx]) return array[innerIdx];
//     }
//   }
//   return undefined;
// }

// function firstRecurringCharacter(input) {
//   for (let i = 0; i < input.length; i++) {
//     for (let j = i + 1; j < input.length; j++) {
//       if (input[i] === input[j]) {
//         return input[i];
//       }
//     }
//   }
//   return undefined;
// }

function firstRecurringCharacter(array) {
  const map = new Map();

  for (let idx = 0; idx < array.length; idx++) {
    if (map.has(array[idx])) return array[idx];

    map.set(array[idx], true);
  }

  return undefined;
}

const result = firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]);
console.log("result: ", result);
