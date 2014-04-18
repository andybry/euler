var problem5 = {
  /**
   * 2520 is the smallest number that can be divided by each of the numbers
   * from 1 to 10 without any remainder.
   * What is the smallest positive number that is evenly divisible by all
   * of the numbers from 1 to 20?
   *
   * @param {number} n
   * @return {number}
   */
  solveProblem: function(n) {
    var range = problem5.oneToN(n);
    return range.reduce(problem5.lowestCommonMult);
  },
  /**
   * calculates the range of numbers from 1 to n
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
   * @param {number} a
   * @param {number} b
   * @return {number}
   */
  lowestCommonMult: function(a, b) {
    var currentMultOfA = a;
    while(currentMultOfA % b != 0) {
      currentMultOfA += a;
    }
    return currentMultOfA;
  }
};