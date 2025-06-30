# Climbing Stairs - Solution Explanation

## Problem Summary

The problem asks us to find the number of distinct ways to climb a staircase with `n` steps, where we can either climb 1 or 2 steps at a time.

## Approach: Dynamic Programming with Memoization

The solution uses dynamic programming with memoization to avoid redundant calculations in a recursive approach.

### Key Concepts

#### 1. Recursive Relationship

The problem can be broken down recursively:

- To reach step `n`, we can either:
  - Take a single step from position `n-1`
  - Take a two-step from position `n-2`
- Therefore, the total number of ways to reach step `n` is the sum of the ways to reach step `n-1` and the ways to reach step `n-2`
- This can be expressed as: `ways(n) = ways(n-1) + ways(n-2)`

#### 2. Base Cases

- There is 1 way to climb 0 steps (already at the top)
- There is 1 way to climb 1 step (take a single step)

#### 3. Memoization

- Without memoization, this recursive solution would have exponential time complexity O(2^n)
- We use a Map to store previously computed values to avoid recalculating them
- This optimization reduces the time complexity to O(n)

### Code Analysis

```javascript
var climbStairs = function (n) {
  // Create a Map to store previously calculated results
  let steps = new Map();

  // Define base cases
  steps.set(0, 1); // 1 way to climb 0 steps (already at the top)
  steps.set(1, 1); // 1 way to climb 1 step

  function calculate(number) {
    // If we've already calculated this value, return it from our map
    if (steps.has(number)) {
      return steps.get(number);
    }

    // For numbers <= 2, return the number itself (2 ways to climb 2 steps)
    if (number <= 2) return number;

    // Recursive calculation using the formula ways(n) = ways(n-1) + ways(n-2)
    const res = calculate(number - 1) + calculate(number - 2);

    // Store the result in our map before returning
    steps.set(number, res);
    return res;
  }

  // Start the calculation process
  const answer = calculate(n);
  return answer;
};
```

### Relation to Fibonacci Sequence

This problem actually generates the Fibonacci sequence offset by one position:

- For n = 1, answer = 1 (base case)
- For n = 2, answer = 2 (base case)
- For n = 3, answer = 3 (1+2)
- For n = 4, answer = 5 (2+3)
- For n = 5, answer = 8 (3+5)
- And so on...

### Time and Space Complexity

- **Time Complexity**: O(n) because with memoization, we calculate each value exactly once
- **Space Complexity**: O(n) for the memoization table

### Alternative Approaches

#### 1. Bottom-up Dynamic Programming

We could also solve this iteratively using an array:

```javascript
function climbStairs(n) {
  if (n <= 2) return n;
  let dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
```

#### 2. Space-Optimized Solution

Since we only need the previous two values, we can optimize space to O(1):

```javascript
function climbStairs(n) {
  if (n <= 2) return n;
  let prev1 = 1; // ways to climb 1 step
  let prev2 = 2; // ways to climb 2 steps

  for (let i = 3; i <= n; i++) {
    let current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }

  return prev2;
}
```

## Conclusion

The Climbing Stairs problem is a classic example of dynamic programming. Its recursive structure and overlapping subproblems make it a perfect candidate for memoization or tabulation approaches. The solution shown here demonstrates how memoization can be used to efficiently solve a problem that would otherwise have exponential time complexity.
