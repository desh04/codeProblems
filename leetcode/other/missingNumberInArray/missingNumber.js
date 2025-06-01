// If array is now sorted below one will work
const missingNumber = (arr) => {
  // Using concept of Arithmetic Progression
  // will calculate the sum of current array and sum using AP formula
  // [2*a + (n-1)d] (n/2)
  // where, a=Is the first term of the AP,
  // n: Is the number of terms.
  // d: Is the common difference between consecutive terms in the AP.

  const actualNumber = arr.length + 1; // +1 for missing number
  const apFirstNumber = Math.min(...arr); // a
  const d = 1; // know from the formula

  const currentArrSum = arr.reduce((total, curr) => total + curr, 0);

  const actualSum =
    (2 * apFirstNumber + (actualNumber - 1) * d) * (actualNumber / 2);

  return actualSum - currentArrSum;
};

// if have sorted array we could use binary search
// Binary Search approach (O(log n))
const missingNumberBinarySearch = (arr) => {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    // arr[mid] - arr[0] calculates how many steps away arr[mid] is from the first element.
    // If there were no missing numbers, then at index mid, the value should be exactly arr[0] + mid.
    // So, if arr[mid] - arr[0] === mid, it means all numbers up to index mid are present and in order.
    if (arr[mid] - arr[0] === mid) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return arr[0] + left;
};

const arr1 = [2, 3, 4, 6, 7];
const arr2 = [10, 11, 12, 14, 15];
const arr3 = [1, 2, 3, 5];

console.log({
  arr1: missingNumber(arr1),
  arr2: missingNumber(arr2),
  arr3: missingNumber(arr3),
});
