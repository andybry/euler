
describe('problem1', function() {

  describe('solveProblem', function() {
    it('sums all multiples of 3 or 5 less than a given number', function() {
      spyOn(problem1, 'multiplesOf3LessThan').andReturn([3, 6, 9]);
      spyOn(problem1, 'multiplesOf5LessThan').andReturn([5]);
      spyOn(problem1, 'concatenateArrays').andReturn([3, 6, 9, 5]);
      spyOn(problem1, 'sortArray').andReturn([3, 5, 6, 9]);
      spyOn(problem1, 'filterDuplicates').andReturn([3, 5, 6, 9]);
      spyOn(problem1, 'sumArray').andReturn(23);
      var actual = problem1.solveProblem(10);
      expect(problem1.multiplesOf3LessThan).toHaveBeenCalledWith(10);
      expect(problem1.multiplesOf5LessThan).toHaveBeenCalledWith(10);
      expect(problem1.concatenateArrays).toHaveBeenCalledWith([3, 6, 9], [5]);
      expect(problem1.sortArray).toHaveBeenCalledWith([3, 6, 9, 5]);
      expect(problem1.filterDuplicates).toHaveBeenCalledWith([3, 5, 6, 9]);
      expect(problem1.sumArray).toHaveBeenCalledWith([3, 5, 6, 9]);
      expect(actual).toBe(23);
    });
  });

  describe('multiplesOf3LessThan', function() {
    describe('when n is 10', function() {
      it('returns [3, 6, 9]', function() {
        expect(problem1.multiplesOf3LessThan(10)).toEqual([3, 6, 9]);
      });
    });
  });

  describe('multiplesOf5LessThan', function() {
    describe('when n is 15', function() {
      it('returns [5, 10]', function() {
        expect(problem1.multiplesOf5LessThan(15)).toEqual([5, 10]);
      });
    });
  });

  describe('concatenateArrays', function() {
    describe('when a is [1, 3, 10] and b is [2, 4]', function() {
      it('returns [1, 3, 10, 2, 4]', function() {
        expect(problem1.concatenateArrays([1, 3, 10], [2, 4]))
          .toEqual([1, 3, 10, 2, 4]);
      });
    });
  });

  describe('sumArray', function() {
    it('returns 16 when ary is [1, 5, 10]', function() {
      expect(problem1.sumArray([1, 5, 10])).toBe(16);
    });
  });

  describe('sortArray', function() {
    it('returns [1, 3, 10, 17] when ary is [17, 3, 10, 1]', function() {
      expect(problem1.sortArray([17, 3, 10, 1])).toEqual([1, 3, 10, 17]);
    });
  });

  describe('filterDuplicates', function() {
    it('returns [1, 3, 5] when ary is [1, 1, 3, 5, 5]', function() {
      expect(problem1.filterDuplicates([1, 1, 3, 5, 5])).toEqual([1, 3, 5]);
    });
  });

  describe('integration tests', function() {
    it('returns 23 when n is 10', function() {
      expect(problem1.solveProblem(10)).toBe(23);
    });
    it('returns ? when n is 1000', function() {
      expect(problem1.solveProblem(1000)).toBe(233168);
    });
  });

});