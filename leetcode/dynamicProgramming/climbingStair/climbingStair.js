var climbStairs = function (n) {
  let steps = new Map();
  //   let steps = [1, 1];
  steps.set(0, 1);
  steps.set(1, 1);
  function calculate(number) {
    if (steps.has(number)) {
      return steps.get(number);
    }
    if (number <= 2) return number;
    const res = calculate(number - 1) + calculate(number - 2);
    steps.set(number, res);
    return res;
  }
  const answer = calculate(n);
  return answer;
};

console.log({
  1: climbStairs(1),
  2: climbStairs(2),
  3: climbStairs(3),
  4: climbStairs(4),
  5: climbStairs(5),
});
