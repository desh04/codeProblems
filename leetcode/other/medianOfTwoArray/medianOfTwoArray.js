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

// [a1, a2, a3, a4, a5]
// [b1, b2, b3, b4];
var findMedianSortedArrays2 = function (nums1, nums2) {
  // let s1 = 0;
  // let e1 = nums1.length - 1;

  // let s2 = 0;
  // let e2 = nums2.length - 1;

  // let m1 = Math.floor((s1 + e1) / 2);
  // let m2 = Math.floor((s2 + e2) / 2);

  // if (nums1[m1] > nums2[m2]) {
  // }

  let l1 = nums1.length;
  let l2 = nums2.length;

  let totalLenght = l1 + l2;

  const middle =
    (l1 + l2) % 2 === 0
      ? [Math.floor((l1 + l2) / 2) - 1, Math.floor((l1 + l2) / 2)]
      : [Math.floor((l1 + l2) / 2)];

  let s1 = 0,
    s2 = 0,
    e1,
    e2;

  e1 = Math.floor(l1 / 2) - 1;
  e2 = middle[0] - e1 - 1;

  console.log({ middle, e1, e2 });
  let isError = true;

  while (isError) {
    isError = false;
  }
};

console.log(findMedianSortedArrays2([1, 3], [2]));
console.log(findMedianSortedArrays2([1, 2], [3, 4]));
