var problem6 = {
  /**
   *   The sum of the squares of the first ten natural numbers is,
   *
   * 1 ^ 2 + 2 ^ 2 + ... + 10 ^ 2 = 385
   * The square of the sum of the first ten natural numbers is,
   *
   * (1 + 2 + ... + 10) ^ 2 = 55 ^ 2 = 3025
   * Hence the difference between the sum of the squares of the first
   * ten natural numbers and the square of the sum is 3025 − 385 = 2640.
   *
   * Find the difference between the sum of the squares of the first
   * one hundred natural numbers and the square of the sum.
   *
   * @param {number} n
   * @return {number}
   */
  solveProblem: function(n) {
    var range = problem6.oneToN(n);
    var sumOfSquares = problem6.sumOfSquares(range);
    var squareOfSum = problem6.squareOfSum(range);
    return squareOfSum - sumOfSquares;
  },
  /**
   * calculates the array of numbers from 1 to n
   * @param {number} n
   * @return {Array<number>}
   */
  oneToN: function(n) {
    var ret = [];
    var index;
    for(index = 1; index <= n; index++) {
      ret.push(index);
    }
    return ret;
  },
  /**
   * @param {Array<number>} ary
   * @return {number}
   */
  sumOfSquares: function(ary) {
    var squares = ary.map(problem6.square);
    return squares.reduce(problem6.sum, 0);
  },
  /**
   * @param {Array<number>} ary
   * @return {number}
   */
  squareOfSum: function(ary) {
    var sum = ary.reduce(problem6.sum, 0);
    return problem6.square(sum);
  },
  /**
   * @param {number} n
   * @return {number}
   */
  square: function(n) {
    return Math.pow(n, 2);
  },
  /**
   * @param {number} a
   * @param {number} b
   * @return {number}
   */
  sum: function(a, b) {
    return a + b;
  }
};