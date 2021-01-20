// Time Complexity

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

// Space Complexity
// function boooo(n) {
//   for (let i = 0; i < n.length; i++) {
//     console.log('booooo');
//   }
// }

// boooo([1, 2, 3, 4, 5]); // O(1)

// function arrayOfHiNTimes(n) {
//   let hiArray = [];
//   for (let i = 0; i < n.length; i++) {
//     hiArray[i] = 'hi';
//   }
//   return hiArray;
// }

// arrayOfHiNTimes(6); // O(n)

// BigO says, which function, algorithm or code is best, we learned that when it comes to good code,
// we're concerned about readability and scalability, and BigO allows us to measure the idea of scalable
// code.

// And why do we care?
// It's because there is no such thing as a free lunch.
// You save time and money for a company, you're a superstar.
// Knowing how much time your code takes, how much memory it uses is very, very critical.
// Those are expensive things for a company or a product.
// Now, BigO is a very important concept that you won't find in your day to day job, but it is something
// that should always be in the back of your mind.
// And good developers and engineers always have this knowledge.
// That is why it is such a popular topic.
// During interviews, Go is used to describe how efficient we can run our code.
// It saves companies a lot of money if people they hire know how to ride efficient code.
// And in this section we learned about the idea of time, complexity and space complexity, how we can
// use Bigo to measure both things.
// But each one is a trade off between the other.
// And Bigo describes the upper bound of our estimates.

// We're always looking at the worst case scenario.
// We want to be pessimistic and say what is the worst case scenario here with our code so we can be prepared
// when the time comes.

// Now, time, complexity and space complexity time is how long it takes the algorithm to run, and space
// is the memory that is required by the algorithm.
// The important thing that we learned here is that Bigo is about how you can scale.
// It doesn't necessarily mean that oh n is better than zero and square because scalability wasn't the

// only factor.

// Right?

// Readability is something that we are concerned with as well.
// Sometimes readability maybe matters more than scalability.
// Maybe time complexity is less important than space complexity.
// And that's something that you want to be careful of now with this newfound knowledge, premature optimization
// can be the root of all evil.

// It's a famous quote that a lot of developers know sometimes optimizing for time or space can negatively
// impact the readability of code.

// So if you're working at a young startup, for example, might be more important for you to write code
// that's easy to ship and perhaps easy to understand later, perhaps not take as much time to write the
// code and think about the code and its implications for long term, because maybe the startup has limited
// budget and needs things done fast.

// That doesn't mean startups don't care about Bigo analysis.
// A great engineer at a startup or at a big company knows how to strike the right balance between runtime
// space and, of course, readability.
// The thing to keep in mind is that data needs to be sufficiently big to talk about.
// They go.
// It's about scaling if your function is linear time, but the input is always, let's say, seven items,
// then the linear time algorithm might be better than the Konstantine algorithm.

// So it really, really depends on your situation.
// I introduced Digo here because we're going to be using it throughout this course, and as we learn more
// about data structures and algorithms, we're going to learn more about Bago and some other things we
// saw in this graph that we haven't talked about.
// But I hope you now look at a code differently.
// And you had a few aha moments throughout this section.
// It's certainly my favorite section and a great topic that really made me a better engineer once I learned
// this topic, so I hope it did for you as well.
// At the end of this, all you have a way to look at code differently.
// And when someone says, hey, how good is my code?
