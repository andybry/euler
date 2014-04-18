describe('problem6', function () {

  describe('solveProblem', function () {
    it('calculates the sum of squares and the square of the sum and returns the difference', function () {
      var range = [1, 2, 3];
      spyOn(problem6, 'oneToN').andReturn(range);
      spyOn(problem6, 'sumOfSquares').andReturn(15);
      spyOn(problem6, 'squareOfSum').andReturn(100);
      var actual = problem6.solveProblem(3);
      expect(problem6.sumOfSquares).toHaveBeenCalledWith(range);
      expect(problem6.squareOfSum).toHaveBeenCalledWith(range);
      expect(actual).toBe(85); // 100 - 15
    });
  });

  describe('oneToN', function () {
    it('returns the array of numbers from 1 to n', function () {
      expect(problem6.oneToN(5)).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('sumOfSquares', function () {
    it('returns the sum of the squares of the elements in the array', function () {
      var ary = [3, 4, 5];
      var squares = [9, 16, 25];
      spyOn(ary, 'map').andReturn(squares);
      spyOn(squares, 'reduce').andReturn(50);
      var actual = problem6.sumOfSquares(ary);
      expect(ary.map).toHaveBeenCalledWith(problem6.square);
      expect(squares.reduce).toHaveBeenCalledWith(problem6.sum, 0);
      expect(actual).toBe(50);
    });
  });

  describe('squareOfSum', function () {
    it('calculates the sum and then returns the square', function () {
      var ary = [3, 4, 5];
      spyOn(ary, 'reduce').andReturn(12);
      spyOn(problem6, 'square').andReturn(144);
      var actual = problem6.squareOfSum(ary);
      expect(ary.reduce).toHaveBeenCalledWith(problem6.sum, 0);
      expect(problem6.square).toHaveBeenCalledWith(12);
      expect(actual).toBe(144);
    });
  });

  describe('square', function() {
    it('returns the square of a number', function() {
      spyOn(Math, 'pow').andReturn(25);
      var actual = problem6.square(5);
      expect(Math.pow).toHaveBeenCalledWith(5, 2);
      expect(actual).toBe(25);
    });
  });
  
  describe('sum', function() {
    it('returns the sum of the two numbers', function() {
      expect(problem6.sum(3, 7)).toBe(10);
    });
  });

  describe('integration tests', function() {
    it('returns 2640 for n = 10', function() {
      expect(problem6.solveProblem(10)).toBe(2640);
    });
    it('returns ? for n = 100', function() {
      expect(problem6.solveProblem(100 )).toBe(25164150);
    });
  });
});