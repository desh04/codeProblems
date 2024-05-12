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

  let e1, e2;

  e1 = Math.max(Math.floor(l1 / 2) - 1, 0);
  e2 = Math.max(middle[0] - e1 - 1, 0);

  let isError = true;

  while (isError) {
    if (nums1[e1] > nums2[e2 + 1]) {
      --e1;
      ++e2;
      continue;
    }
    if (nums2[e2] > nums1[e1 + 1]) {
      --e2;
      ++e1;
      continue;
    }
    isError = false;
  }

  // console.log({ e1, e2 });

  if (totalLenght % 2 === 0) {
    let n1 = Math.max(
      e1 >= 0 ? nums1[e1] : -Infinity,
      e2 >= 0 ? nums2[e2] : -Infinity
    );
    let n2 = Math.min(
      e1 + 1 >= 0 && e1 + 1 < nums1.length ? nums1[e1 + 1] : Infinity,
      e2 + 1 >= 0 && e2 + 1 < nums2.length ? nums2[e2 + 1] : Infinity
    );
    return (n1 + n2) / 2;
  } else {
    let median = Math.max(
      e1 >= 0 ? nums1[e1] : -Infinity,
      e2 >= 0 ? nums2[e2] : -Infinity
    );
    // console.log('coming here', median);
    return median;
  }
};

var findMedianSortedArrays3 = function (nums1, nums2) {
  let A, B, i, j;
  let total = nums1.length + nums2.length;
  let half = Math.floor(total / 2);
  if (nums1.length <= nums2.length) {
    A = nums1;
    B = nums2;
  } else {
    A = nums2;
    B = nums1;
  }

  let l = 0;
  let r = A.length - 1;

  while (true) {
    i = Math.floor((l + r) / 2); // mid point for A
    j = half - 1 - i - 1; // for B
    let Aleft = i >= 0 ? A[i] : -Infinity;
    let Aright = i + 1 < A.length ? A[i + 1] : Infinity;
    let Bleft = j >= 0 ? B[j] : -Infinity;
    let Bright = j + 1 < B.length ? B[j + 1] : Infinity;

    // partiton correction
    if (Aleft <= Bright && Bleft <= Aright) {
      if (total % 2) {
        //Odd
        return Math.min(Aright, Bright);
      } else {
        //Even
        return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
      }
    } else if (Aleft > Bright) {
      // reduce the size of partition form the A
      r = i - 1;
    } else {
      // increasing the partition
      l = i + 1;
    }
  }
};

// console.log(findMedianSortedArrays3([2], []));
// console.log(findMedianSortedArrays3([], [1]));
// console.log(findMedianSortedArrays3([1, 3], [2]));
console.log(findMedianSortedArrays3([1, 2], [3, 4]));
