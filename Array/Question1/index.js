// Given an array of integers, return the indices of the two numbers that add up to a given a target

/*
1. Verify the constraints
    - Are all the numbers postitive or can there be negatives? (e.g All number are positive)
    - Are duplicate numbers in the array? (e.g No, there are no duplicates)
    - Will there always be a solution available? (e.g No, there may not always be a solution)
    - What do we return if there's no sulution? (e.g Just return null)
    - Can there be multiple pairs that add up to the target? (e.g No, Only 1 pair of numbers wil add up to the target )
2. Write out some test cases e.g 
[1,3,7,9,2] t=11 [3,4]
[1,3,7,9,2] t=25 null
[] t=1 null
[5] t=5 null
[1,6] t=7 [0,1]
3. Figure out a solution without code(two pointer Technique)
numberToFind = target - nums[p1]
4. Write out brute force solution
5. Double check for errors
6. Test our code with test cases
7. Analyzing space and time complexity

Polynomial
O(LogN) - Logarithmic
O(N) - Linear
O(NLogN) - Linearithmic
O(N²) - Quadratic
O(N³) - Cubic

Exponential
O(2ᴺ) - Exponential
O(!N) - Factorial
O(Nᴺ) - Exponential 
*/

// const findTwoSum = function (nums, target) {
//   for (let p1 = 0; p1 < nums.length; p1++) {
//     // p1 = 0

//     const numberToFind = target - nums[p1]; // ntf = 10
//     for (p2 = p1 + 1; p2 < nums.length; p2++) {
//       // p2 = 1
//       if (numberToFind === nums[p2]) {
//         // console.log([p1, p2]);
//         return [p1, p2];
//       }
//     }
//   }

//   return null;
// }; //Time complexity = O(N²), Space complexity = O(1)

// findTwoSum([1, 3, 7, 9, 2], 11);

// 8. Optimizing our solution

const findTwoSum = function (nums, target) {
  const numsMap = {};
  for (let p = 0; p < nums.length; p++) {
    const currentMapVal = numsMap[nums[p]];
    if (currentMapVal >= 0) {
      return [currentMapVal, p];
    } else {
      const numberToFind = target - nums[p];
      numsMap[numberToFind] = p;
    }
  }
  return null;
};

// 9. Run test case in optimal solution
