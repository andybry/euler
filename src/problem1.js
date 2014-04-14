var problem1 = {
  /**
   * Find the sum of all the multiples of 3 or 5 below 1000.
   *
   * @param n {number}
   * @return {number}
   */
  solveProblem: function(n) {
    var multsOf3LessThanN = problem1.multiplesOf3LessThan(n);
    var multsOf5LessThanN = problem1.multiplesOf5LessThan(n);
    var allMultsLessThanN = problem1
      .concatenateArrays(multsOf3LessThanN, multsOf5LessThanN);
    var allMultsSorted = problem1.sortArray(allMultsLessThanN);
    var allMultsFiltered = problem1.filterDuplicates(allMultsSorted);
    return problem1.sumArray(allMultsFiltered);
  },
  /**
   * @param n {number}
   * @return {Array<number>}
   */
  multiplesOf3LessThan: function(n) {
    var ret = [];
    var isMultipleOf3;
    for(var index = 1; index < n; index++) {
      isMultipleOf3 = index % 3 == 0;
      if(isMultipleOf3) {
        ret.push(index);
      }
    }
    return ret;
  },
  /**
   * @param n {number}
   * @return {Array<number>}
   */
  multiplesOf5LessThan: function(n) {
    var ret = [];
    var isMultipleOf5;
    for(var index = 1; index < n; index++) {
      isMultipleOf5 = index % 5 == 0;
      if(isMultipleOf5) {
        ret.push(index);
      }
    }
    return ret;
  },
  /**
   * @param a {Array<number>}
   * @param b {Array<number>}
   * @return {Array<number>}
   */
  concatenateArrays: function(a, b) {
    return a.concat(b);
  },
  /**
   * @param ary {Array<number>}
   * @return {number}
   */
  sumArray: function(ary) {
    return ary.reduce(function(memo, element) {
      return memo + element;
    }, 0);
  },
  /**
   * @param ary {Array<number>}
   * @return {Array<number>}
   */
  sortArray: function(ary) {
    return ary.sort(function(a, b) {
      return a - b;
    });
  },
  /**
   * Filter adjacent duplicate entries from the array
   *
   * @param ary {Array<number>}
   * @return {Array<number>}
   */
  filterDuplicates: function(ary) {
    return ary.reduce(function(memo, element, index, ary) {
      var isFirst = index == 0;
      var isDifferentFromPrevious = element != ary[index - 1];
      var isUnique = isFirst || isDifferentFromPrevious;
      if(isUnique) {
        memo.push(element);
        return memo;
      } else {
        return memo;
      }
    }, []);
  }

};