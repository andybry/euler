var problem3 = {
  /**
   * The prime factors of 13195 are 5, 7, 13 and 29.
   *
   * What is the largest prime factor of the number 600851475143 ?
   *
   * @param n {number}
   * @return {number}
   */
  solveProblem: function(n) {
    var factors = problem3.getFactors(n);
    var primes = problem3.filterProducts(factors);
    return primes.pop();
  },
  /**
   * @param n {number}
   * @return {Array<number>}
   */
  getFactors: function(n) {
    var ret = [];
    var index;
    for(index = 2; index < n; index++) {
      if(n % index == 0) ret.push(index);
    }
    return ret;
  },
  /**
   * Removes elements which are divisible by other elements
   * @param ary {Array<number>} a monotonic increasing array
   * @return {Array<number>}
   */
  filterProducts: function(ary) {
    var ret = ary;
    var length = ary.length;
    var lastElement = ary[ length - 1 ];
    var index;
    for(index = 2; index < lastElement; index++) {
      ret = problem3.filterProductsOf(ret, index);
    }
    return ret;
  },
  /**
   * Filters the array by only selecting num, or elements
   * which are not divisible by num
   *
   * @param ary {Array<number>}
   * @param num {number}
   *
   * @return {Array<number>}
   */
  filterProductsOf: function(ary, num) {
    return ary.filter(function(element) {
      var isNum = element == num;
      var notDivisibleByNum = element % num != 0;
      return isNum || notDivisibleByNum;
    });
  }
};