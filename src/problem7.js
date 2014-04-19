var problem7 = {
  /**
   *
   * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
   * we can see that the 6th prime is 13.
   *
   * What is the 10 001st prime number?
   *
   * @param {number} n
   * @return {number}
   */
  solveProblem: function(n) {
    var primes = [];
    var currentPrime;
    var copyOfPrimes;
    while(primes.length < n) {
      copyOfPrimes = problem7.clone(primes);
      currentPrime = problem7.calculateNextPrime(copyOfPrimes);
      primes.push(currentPrime);
    }
    return currentPrime;
  },
  /**
   * Calculates the next prime given the first n primes
   *
   * @param {Array<number>} primesBelow
   * @return {Array}
   */
  calculateNextPrime: function(primesBelow) {
    var numberOfPrimesSoFar = primesBelow.length;
    var mostRecentPrime = primesBelow[ numberOfPrimesSoFar - 1];
    var candidate = mostRecentPrime + 1 || 2; // 2 when the array is empty
    while(!problem7.isPrime(primesBelow, candidate)) {
      candidate++;
    }
    return candidate;
  },
  /**
   * Creates a shallow copy of the array
   * @param {Array<number>} ary
   * @return {Array<number>}
   */
  clone: function(ary) {
    return ary.slice(0);
  },
  /**
   * Determines whether a given number is prime given
   * all the primes up to this point
   *
   * @param {Array<number>} ary the primes up to the candidate
   * @param {number} candidate
   * @return {boolean}
   */
  isPrime: function(ary, candidate) {
    var divisibleBy = ary.some(function(prime) {
      return candidate % prime == 0;
    });
    return !divisibleBy;
  }
};