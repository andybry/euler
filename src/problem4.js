var problem4 = {
  /**
   * A palindromic number reads the same both ways.
   * The largest palindrome made from the product of two 2-digit numbers
   * is 9009 = 91 × 99.
   *
   * Find the largest palindrome made from the product of two 3-digit numbers.
   *
   * @param {number} numberOfDigits
   * @return {number}
   */
  solveProblem: function(numberOfDigits) {
    var multiples = problem4.multsOf2NDigitNums(numberOfDigits);
    var orderedMultiples = problem4.sortDescending(multiples);
    return problem4.selectFirstPalindrome(orderedMultiples);
  },
  /**
   * Find all multiples of 2 numbers both having the given number
   * of digits.
   *
   * @param {number} numberOfDigits
   * @return {Array<number>}
   */
  multsOf2NDigitNums: function(numberOfDigits) {
    var start = problem4.smallestNumberWithNDigits(numberOfDigits);
    var end = problem4.largestNumberWithNDigits(numberOfDigits);
    var outerIndex;
    var innerIndex;
    var ret = [];
    for(outerIndex = start; outerIndex <= end; outerIndex++) {
      for(innerIndex = start; innerIndex <= end; innerIndex++) {
        ret.push(outerIndex * innerIndex);
      }
    }
    return ret;
  },
  /**
   * @param {Array<number>} ary
   * @return {Array<number>}
   */
  sortDescending: function(ary) {
    return ary.sort(function(a, b) {
      return b - a;
    });
  },
  /**
   * @param {Array<number>} ary
   * @return {number}
   */
  selectFirstPalindrome: function(ary) {
    var index;
    for(index in ary) {
      var number = ary[index];
      if(problem4.isPalindrome(number)) return number;
    }
  },
  /**
   * the smallest integer with the given number of digits
   * @param {number} numberOfDigits
   * @return {number}
   */
  smallestNumberWithNDigits: function(numberOfDigits) {
    var numberOfZeros = numberOfDigits - 1;
    return Math.pow(10, numberOfZeros);
  },
  /**
   * the largest number with the given number of digits
   * @param {number} numberOfDigits
   */
  largestNumberWithNDigits: function(numberOfDigits) {
    return Math.pow(10, numberOfDigits) - 1;
  },
  /**
   * @param {number} candidate
   * @return {boolean}
   */
  isPalindrome: function(candidate) {
    var candidateAsString = candidate.toString();
    var reversedCandidate = problem4.reverse(candidateAsString);
    return candidateAsString == reversedCandidate;
  },
  /**
   * reverses the characters in a string
   * @param {string} str
   */
  reverse: function(str) {
    var strAsArray = str.split('');
    var strAsArrayReversed = strAsArray.reverse();
    return strAsArrayReversed.join('');
  }
}