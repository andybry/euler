var problem9 = {
  /**
   * A Pythagorean triplet is a set of three natural numbers, a < b < c,
   * for which,
   *
   * a ^ 2 + b ^ 2 = c ^ 2
   * For example, 3^ 2 + 4 ^ 2 = 9 + 16 = 25 = 5 ^ 2.
   *
   * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
   * Find the product abc.
   *
   * @param {number} n
   * @return {number}
   */
  solveProblem: function(n) {
    var pythagoreans = problem9.pythagoreans(n);
    var tripleWithSum = problem9.findTripleWithSum(pythagoreans, n);
    return problem9.product(tripleWithSum);
  },
  /**
   * Finds all pythagorean triples (a, b, c)
   * where a, b < n
   *
   * @param {number} n
   * @return {Array<Array<number>>} array of triples
   */
  pythagoreans: function(n) {
    var monotonicPairs = problem9.monotonicPairs(n);
    var potentialPythagoreans = problem9.potentialPythagoreans(monotonicPairs);
    return problem9.filterForPythagoreans(potentialPythagoreans);
  },
  /**
   * From an array of triples find the triple with the given sum
   * @param {Array<Array<number>>} ary
   * @param {number} sum
   * @return {Array<number>}
   */
  findTripleWithSum: function(ary, sum) {
    var index;
    var currentElement;
    var sumOfElement;
    for(index in ary) {
      currentElement = ary[index];
      sumOfElement = problem9.sumArray(currentElement);
      if(sumOfElement == sum) return currentElement;
    }
  },
  /**
   * calculates the product of a triple
   * @param {Array<number>} triple
   * @return {number}
   */
  product: function(triple) {
    return triple.reduce(function(memo, number) {
      return memo * number;
    }, 1);
  },
  /**
   * calculates all the monotonic increasing pairs up
   * to the given number
   *
   * @param {string} number
   * @return {Array<Array<number>>} array of strict monotonic tuples
   */
  monotonicPairs: function(number) {
    var ret = [];
    var indexA;
    var indexB;
    var indexAStart = 1;
    var indexAEnd = number - 1;
    var indexBStart;
    var indexBEnd = number;
    for(indexA = indexAStart; indexA <= indexAEnd; indexA++) {
      indexBStart = indexA + 1;
      for(indexB = indexBStart; indexB <= indexBEnd; indexB++) {
        ret.push([indexA, indexB]);
      }
    }
    return ret;
  },
  /**
   * Adds a third element to the duple which is the square root
   * of the sum of the squares of the other two elements.
   *
   * @param {Array<Array<number>>} aryOfDuples
   * @return {Array<Array<number>>} array of triples
   */
  potentialPythagoreans: function(aryOfDuples) {
    return aryOfDuples.map(function(duple) {
      var ret = duple.slice(0);
      var a = duple[0];
      var b = duple[1];
      var squareOfA = Math.pow(a, 2);
      var squareOfB = Math.pow(b, 2);
      var sumOfSquares = squareOfA + squareOfB;
      var sqrt = Math.sqrt(sumOfSquares);
      ret.push(sqrt);
      return ret;
    });
  },
  /**
   * Filters arrays of triples by removing the elements that
   * don't have integral final elements
   *
   * @param {Array<Array<number>>} aryOfTriples
   * @return {Array<Array<number>>}
   */
  filterForPythagoreans: function(aryOfTriples) {
    return aryOfTriples.filter(function(triple) {
      var lastElement = triple[2];
      return problem9.isInteger(lastElement);
    });
  },
  /**
   * Sums the elements in an array
   *
   * @param {Array<number>} ary
   * @return {number} the sum of the elements
   */
  sumArray: function(ary) {
    return ary.reduce(function(memo, number) {
      return memo + number;
    }, 0);
  },
  /**
   * @param {number} number
   * @return {boolean}
   */
  isInteger: function(number) {
    return number % 1 === 0;
  }
};