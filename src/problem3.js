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
    var remainingProduct = n;
    var currentFactor = 2;
    var hasRemainingProduct = true;
    while(hasRemainingProduct) {
      remainingProduct = problem3.removeAllFactorsOf(remainingProduct, currentFactor);
      hasRemainingProduct = remainingProduct > 1;
      if(hasRemainingProduct) currentFactor++;
    }
    return currentFactor;
  },
  /**
   * @param product {number} the number to remove factors from
   * @param factor {number} the number to remove factors of
   */
  removeAllFactorsOf: function(product, factor) {
    var remainingProduct = product;
    while(remainingProduct % factor == 0) {
      remainingProduct /= factor;
    }
    return remainingProduct;
  }
};