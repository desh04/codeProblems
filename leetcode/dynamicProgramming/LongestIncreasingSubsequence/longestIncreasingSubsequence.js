// Time Complexity: O(n), Space Complexity: O(1)
function twoPointer(arr) {
  // ! this is wrong cause this is checking only consecutive longest sequence
  if (!arr.length) {
    return 0;
  }
  if (arr.length === 1) {
    return 1;
  }

  let p1 = 0;
  let p2 = 1;
  let longestIncreasingSequence = 1;

  while (p2 < arr.length) {
    if (arr[p2] > arr[p2 - 1]) {
      p2++;
      longestIncreasingSequence = Math.max(p2 - p1, longestIncreasingSequence);
    } else {
      p1 = p2;
      p2++;
    }
  }
  return longestIncreasingSequence;
}

// Time Complexity: O(2^n), Space Complexity: O(n) (due to recursion stack)
function bruteForce(nums) {
  // True brute-force: try all subsequences
  function helper(idx, prev) {
    if (idx === nums.length) return 0;
    // Option 1: skip current element
    let notTake = helper(idx + 1, prev);
    // Option 2: take current element if valid
    let take = 0;
    if (prev === undefined || nums[idx] > prev) {
      take = 1 + helper(idx + 1, nums[idx]);
    }
    return Math.max(take, notTake);
  }
  return helper(0, undefined);
}

// Time Complexity: O(n^2), Space Complexity: O(n)
function dynamicProgramming(nums) {
  let memoizedSequenceArr = new Array(nums.length).fill(1); // filling with 1 b'cuz atleast 1 will be longest

  for (let i = 1; i < nums.length; i++) {
    let sequenceLength = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        let longestSequenceTillI = memoizedSequenceArr[j] + 1;
        console.log({ i, j, longestSequenceTillI });
        if (longestSequenceTillI > sequenceLength) {
          sequenceLength = longestSequenceTillI;
        }
      }
    }
    memoizedSequenceArr[i] = sequenceLength;
  }
  console.log({ memoizedSequenceArr });
  //  could also use a variable to track the maximum value, by that we could avoid the last iteration
  return Math.max(...memoizedSequenceArr);
}

// Patience Sort
function byPatienceSort(nums) {
  // it is based on game called Patience Game (aka Solitaire)
  // the card sorting game that you used to play on windows XP

  if (!nums.length) {
    return 0;
  }

  const pilesArray = new Array();

  pilesArray.push(nums[0]);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > pilesArray[pilesArray.length - 1]) {
      pilesArray.push(nums[i]);
    } else {
      let insertionIndex = binarySearch(pilesArray, nums[i]);
      pilesArray[insertionIndex] = nums[i];
    }
  }
  return pilesArray.length;
}

function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;

  let mid = Math.floor((left + right) / 2);

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === value) {
      return mid;
    }
    if (arr[mid] < value) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

const nums1 = [10, 9, 2, 5, 3, 7, 101, 18];
const nums2 = [0, 1, 0, 3, 2, 3];
const nums3 = [7, 7, 7, 7, 7, 7, 7];
const nums4 = [10, 9, 2, 5, 3, 4];
const nums5 = [1, 3, 6, 7, 9, 4, 10, 5, 6];
const nums6 = [10, 7, 8, 5, 16, 27, 9, 1, 13, 15];

console.log({
  TP1: bruteForce(nums1),
  TP2: bruteForce(nums2),
  TP3: bruteForce(nums3),
  TP4: bruteForce(nums4),
  //   TPM1: dynamicProgramming(nums1),
  //   TPM2: dynamicProgramming(nums2),
  //   TPM3: dynamicProgramming(nums3),
  //   TPM4: dynamicProgramming(nums4),
  //   TPM5: dynamicProgramming(nums5),
  BP1: byPatienceSort(nums1),
  BP2: byPatienceSort(nums2),
  BP3: byPatienceSort(nums3),
  BP4: byPatienceSort(nums4),
  BP5: byPatienceSort(nums5),
  BP6: byPatienceSort(nums6),
});
