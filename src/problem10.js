var problem10;
problem10 = {
  /**
   * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
   *
   * Find the sum of all the primes below two million.
   *
   * @param {number} number
   * @return {number}
   */
  solveProblem: function (number) {
    var primesLessThan = problem10.primesLessThan(number);
    return problem10.sumArray(primesLessThan);
  },
  /**
   * @param {number} number
   * @return {Array<number>}
   */
  primesLessThan: function (number) {
    var ret = [];
    var currentPrime;
    var isPrimeLess = true;
    var cloneOfRet;
    while(isPrimeLess) {
      cloneOfRet = ret.slice(0);
      currentPrime = problem10.nextPrime(cloneOfRet);
      if (currentPrime < number) {
        ret.push(currentPrime);
      } else {
        isPrimeLess = false;
      }
    }
    return ret;
  },
  /**
   * @param {Array<number>} ary
   * @return {number}
   */
  sumArray: function (ary) {
    return ary.reduce(function(memo, number) {
      return memo + number;
    }, 0);
  },
  /**
   * @param {Array<number>} ary
   * @return {number}
   */
  nextPrime: function (ary) {
    var lastElement = ary[ ary.length - 1];
    var candidate = lastElement + 1 || 2; // 2 if the array is empty
    var isPrime = false;
    while(!isPrime) {
      isPrime = !ary.some(function(prime) {
        return candidate % prime == 0;
      });
      if(isPrime) {
        return candidate;
      } else {
        candidate++;
      }
    }
  }
};