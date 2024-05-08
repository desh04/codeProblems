var findMedianSortedArrays = function (nums1, nums2) {
  if (!nums1.length && !nums2.length) {
    return 0;
  }

  let mergedArray = [];

  let p1 = nums1.length - 1;
  let p2 = nums2.length - 1;
  let popped;

  while (nums1.length || nums2.length) {
    if (!nums1.length) {
      mergedArray = [...mergedArray, ...nums2.reverse()];
      break;
    }
    if (!nums2.length) {
      mergedArray = [...mergedArray, ...nums1.reverse()];
      break;
    }
    if (nums1[p1] >= nums2[p2]) {
      popped = nums1.pop();
      mergedArray.push(popped);
      --p1;
    }
    if (nums2[p2] > nums1[p1]) {
      popped = nums2.pop();
      mergedArray.push(popped);
      --p2;
    }
  }
  let mergeLen = mergedArray.length;
  console.log({ mergedArray });

  if (mergeLen % 2 === 0) {
    return (mergedArray[mergeLen / 2] + mergedArray[mergeLen / 2 - 1]) / 2;
  } else {
    return mergedArray[Math.floor(mergeLen / 2)];
  }
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
