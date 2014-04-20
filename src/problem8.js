var problem8 = {
  /**
   * Find the greatest product of five consecutive digits in the 1000-digit
   * number.
   *
   * 73167176531330624919225119674426574742355349194934
   * 96983520312774506326239578318016984801869478851843
   * 85861560789112949495459501737958331952853208805511
   * 12540698747158523863050715693290963295227443043557
   * 66896648950445244523161731856403098711121722383113
   * 62229893423380308135336276614282806444486645238749
   * 30358907296290491560440772390713810515859307960866
   * 70172427121883998797908792274921901699720888093776
   * 65727333001053367881220235421809751254540594752243
   * 52584907711670556013604839586446706324415722155397
   * 53697817977846174064955149290862569321978468622482
   * 83972241375657056057490261407972968652414535100474
   * 82166370484403199890008895243450658541227588666881
   * 16427171479924442928230863465674813919123162824586
   * 17866458359124566529476545682848912883142607690042
   * 24219022671055626321111109370544217506941658960408
   * 07198403850962455444362981230987879927244284909188
   * 84580156166097919133875499200524063689912560717606
   * 05886116467109405077541002256983155200055935729725
   * 71636269561882670428252483600823257530420752963450
   *
   * @param {string} numberAsString
   * @param {number} length number of consecutive digits
   * @return {number}
   */
  solveProblem: function(numberAsString, length) {
    var digits = problem8.splitToDigits(numberAsString);
    var arrays = problem8.findArraysOfLength(digits, length);
    var sums = problem8.findProducts(arrays);
    var sortedSums = problem8.sortArray(sums);
    var numberOfSums = sortedSums.length;
    return sortedSums[numberOfSums - 1];
  },
  /**
   * Split the number into digits
   * @param {string} numberAsString
   * @return {Array<number>}
   */
  splitToDigits: function(numberAsString) {
    var digitsAsStrings = numberAsString.split('');
    return digitsAsStrings.map(function(digitAsString) {
      return Number(digitAsString);
    });
  },
  /**
   * Find all sub arrays of the given length
   * @param {Array<number>} ary
   * @param {number} length
   * @return {Array<Array<number>>}
   */
  findArraysOfLength: function(ary, length) {
    var ret = [];
    var index;
    var startIndex = 0;
    var endIndex = ary.length - length;
    var currentArray;
    for(index = startIndex; index <= endIndex; index++) {
      currentArray = ary.slice(index, index + length);
      ret.push(currentArray);
    }
    return ret;
  },
  /**
   * Map an array of an array of numbers to an array of the products
   * of each element
   * @param {Array<Array<number>>} ary
   * @return {Array<number>}
   */
  findProducts: function(ary) {
    return ary.map(function(childAry) {
      return problem8.findProduct(childAry);
    });
  },
  /**
   * @param {Array<number>} ary
   * @return {Array<number>}
   */
  sortArray: function(ary) {
    var aryClone = ary.slice(0);
    return aryClone.sort(function(a, b) {
      return a - b;
    });
  },
  /**
   * @param {Array<number>} ary
   * @return {number}
   */
  findProduct: function(ary) {
    return ary.reduce(function(memo, currentNumber) {
      return memo * currentNumber;
    }, 1);
  }
};