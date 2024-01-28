// BigO

/* 
* What is good code?
1. Readable
2. Scalable -> BigO

example: 

//#1 -- For loop in Javascript.
const nemo = ['nemo'];

function findNemo1(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
}

findNemo1(nemo);

//#1 -- For loop in Javascript.
const fish = ['dory', 'bruce', 'marlin', 'nemo'];
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(10).fill('nemo');

function findNemo2(fish) {
  let t0 = performance.now();
  for (let i = 0; i < fish.length; i++) {
    if (fish[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
  let t1 = performance.now();
  console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds.");
}

findNemo2(everyone)


O(n) -> Linear Time
O(1) -> Constant Time

Exercise: 

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10;
  a = 50 + 3;

  for (let i = 0; i < input.length; i++) {
    anotherFunction();
    let stranger = true;
    a++;
  }
  return a;
}

ans: O(n)
explanation: 
a -> 50 + 3 -> 1
loop -> input.length -> n

exercise: 

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; -> O(1)
  let b = 10; -> O(1)
  let c = 50; -> O(1)
  for (let i = 0; i < input; i++) { O (n)
    let x = i + 1; -> O(n)
    let y = i + 2; -> O(n)
    let z = i + 3; -> O(n)

  }
  for (let j = 0; j < input; j++) { O(n)
    let p = j * 2; -> O(n)
    let q = j * 2; -> O(n)
  }
  let whoAmI = "I don't know"; -> O(1)
}

BigO (4 + 7n) 
-> remove constants
-> O(n)

BigO Rules ->
*/
