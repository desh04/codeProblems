function decisionTree(coins, number) {
  // Time Complexity: O(coins.length^number) exponential
  // Recursive brute-force approach (not efficient for large inputs)
  if (number === 0) return 0;
  if (number < 0) return Infinity;
  let minCoins = Infinity;
  for (let coin of coins) {
    minCoins = Math.min(minCoins, 1 + decisionTree(coins, number - coin));
  }
  return minCoins === Infinity ? -1 : minCoins;
}

// Time complexity is O(sum * coins.length)
function dynamicProgramming(coins, sum) {
  const numberOfCoinsRequiredForEachIndex = Array.from({
    length: sum + 1,
    //   }).fill(sum + 1);
  }).fill(Infinity);
  numberOfCoinsRequiredForEachIndex[0] = 0;
  //   console.log({ numberOfCoinsRequiredForEachIndex });

  for (let i = 1; i < numberOfCoinsRequiredForEachIndex.length; i++) {
    // let minimumCoinForSum = Infinity;
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        numberOfCoinsRequiredForEachIndex[i] = Math.min(
          numberOfCoinsRequiredForEachIndex[i],
          1 + numberOfCoinsRequiredForEachIndex[i - coins[j]] // added 1 as the current number of coin
        );
      }
    }
  }
  //   console.log({ numberOfCoinsRequiredForEachIndex });
  if (numberOfCoinsRequiredForEachIndex[sum] < sum + 1) {
    return numberOfCoinsRequiredForEachIndex[sum];
  } else {
    return -1;
  }
}

console.log({
  decisionTree: decisionTree([1, 3, 5, 6], 8),
  dynamicProgramming1: dynamicProgramming([1, 3, 5, 6], 8),
  dynamicProgramming: dynamicProgramming([2], 3),
});
