// const nemo = ['nemo'];
// const everyone = [
//   'dory',
//   'bruce',
//   'marlin',
//   'nemo',
//   'gill',
//   'bloat',
//   'nigel',
//   'squirt',
//   'darla',
//   'hank',
// ];
// const large = new Array(1000).fill('nemo');

// function findNemo1(array) {
//   // let t1 = performance.now();
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'nemo') {
//       console.log('Find Nemo!');
//     }
//   }
//   // let t0 = performance.now();
//   // console.log('Call to find Nemo took ' + (t1 - t0) + ' milliseconds');
// }

// findNemo1(everyone); // On -> linear time

// const boxes = [0, 1, 2, 3, 4];

// function logTwoBoxes(boxes) {
//   console.log(boxes[1]);
//   console.log(boxes[2]);
// }

// logTwoBoxes(boxes); // O(1) -> constant time

// // What is the Big O of the below function? (Hint, you may want to go line by line)
// function funChallenge(input) {
//   let a = 10; // O(1)
//   a = 50 + 3; // O(1)

//   for (let i = 0; i < input.length; i++) {
//     // O(n)
//     anotherFunction(); // O(n)
//     let stranger = true; // O(n)
//     a++; // O(n)
//   }
//   return a; // O(1)
// }

// // 3 + n + n + n + n or O(3 + 4n) or O(n) -> linear time

// What is the Big O of the below function? (Hint, you may want to go line by line)
// function anotherFunChallenge(input) {
//   let a = 5; // O(1)
//   let b = 10; // O(1)
//   let c = 50; // O(1)
//   for (let i = 0; i < input; i++) {
//     let x = i + 1; // O(n)
//     let y = i + 2; // O(n)
//     let z = i + 3; // O(n)
//   }
//   for (let j = 0; j < input; j++) {
//     let p = j * 2; // O(n)
//     let q = j * 2; // O(n)
//   }
//   let whoAmI = "I don't know"; // O(1)
// }

// 4 + 5n  or O(4 + 5n)

// function printFirstItemThenFirstHalfThenSayHi100Times(items) {
//   console.log(items[0]);

//   var middleIndex = Math.floor(items.length / 2);
//   var index = 0;

//   while (index < middleIndex) {
//     console.log(items[index]);
//     index++;
//   }

//   for (var i = 0; i < 100; i++) {
//     console.log('hi');
//   }
// }

// O(n/2 + 101) or O(n)

// function compressBoxes(box1, box2) {
//   box1.forEach(function (boxes) {
//     console.log(boxes);
//   });

//   box2.forEach(function (boxes) {
//     console.log(boxes);
//   });
// }

// O(a + b)

// //Log all pairs of array

// const boxes = ['a', 'b', 'c', 'd', 'e'];
// function logAllPairsOfArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       console.log(array[i], array[j]);
//     }
//   }
// }

// logAllPairsOfArray(boxes); // O(n ^ 2)

// function printAllNumbersThenAllPairSums(numbers) {
//   console.log('these are the numbers:');
//   numbers.forEach(function (number) {
//     console.log(number);
//   });

//   console.log('and these are their sums:');
//   numbers.forEach(function (firstNumber) {
//     numbers.forEach(function (secondNumber) {
//       console.log(firstNumber + secondNumber);
//     });
//   });
// }

// printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]); // O(n^2)
