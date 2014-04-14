var problem2 = {
  /**
   * By considering the terms in the Fibonacci sequence whose values do not exceed four million,
   * find the sum of the even-valued terms.
   *
   * start numbers 1, 2
   *
   * @param n {number}
   * @return {number}
   */
  solveProblem: function (n) {
    var fibonacci = problem2.fibonacciLessThan(n);
    var fibonacciFiltered = problem2.filterForEven(fibonacci);
    return problem2.sumArray((fibonacciFiltered));
  },
  /**
   *
   * @param n {number}
   * @return {Array<number>}
   */
  fibonacciLessThan: function (n) {
    var addElement = true;
    var fibonacciNumbers = [];
    var lastElement;
    while (addElement) {
      fibonacciNumbers = problem2.addFibonacciNumberTo(fibonacciNumbers);
      var lastElementIndex = fibonacciNumbers.length - 1;
      lastElement = fibonacciNumbers[ lastElementIndex ];
      addElement = lastElement < n;
    }
    fibonacciNumbers.pop();
    return fibonacciNumbers;
  },
  /**
   *
   * @param ary {Array<number>}
   * @return {Array<number>}
   */
  filterForEven: function (ary) {
    return ary.filter(function(element) {
      return element % 2 == 0;
    });
  },
  /**
   * @param ary {Array<number>}
   * @return {Array<number>}
   */
  sumArray: function (ary) {
    return ary.reduce(function(memo, element) {
      return memo + element;
    }, 0);
  },
  /**
   * @param ary {Array<number>}
   * @return {Array<number>}
   */
  addFibonacciNumberTo: function (ary) {
    var ret = problem2.copyArray(ary);
    var length = ret.length;
    var isEmpty = length == 0;
    var hasExactlyOneElement = length == 1;
    var lastButOneElement;
    var lastElement;
    var sumOfLastElements;
    if(isEmpty) {
      ret = [1];
    } else if(hasExactlyOneElement) {
      ret = [1, 2];
    } else {
      lastButOneElement = ary[ length - 2 ];
      lastElement = ary[ length - 1 ];
      sumOfLastElements = lastButOneElement + lastElement;
      ret.push(sumOfLastElements);
    }
    return ret;
  },
  /**
   * @param ary {Array<number>}
   * @return {Array<number>}
   */
  copyArray: function(ary) {
    return ary.slice(0);
  }
};