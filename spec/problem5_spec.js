describe('problem5', function() {

  describe('solveProblem', function() {
    it('calculates the range of numbers then calculates their lcm', function() {
      var range = [1, 2, 3, 4];
      spyOn(problem5, 'oneToN').andReturn(range);
      spyOn(range, 'reduce').andReturn(12);
      var actual = problem5.solveProblem(4);
      expect(problem5.oneToN).toHaveBeenCalledWith(4);
      expect(range.reduce).toHaveBeenCalledWith(problem5.lowestCommonMult);
      expect(actual).toBe(12);
    });
  });

  describe('oneToN', function() {
    it('calculates the array of numbers from 1 to n', function() {
      expect(problem5.oneToN(6)).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
  
  describe('lowestCommonMult', function() {
    it('calculates the lowest common multiple of 2 numbers', function() {
      expect(problem5.lowestCommonMult(6, 15)).toBe(30);
    });
  });

  describe('integration tests', function() {
    it('calculates the lcm of 1 to 10 to be 2520', function() {
      expect(problem5.solveProblem(10)).toBe(2520);
    });
    it('calculates the lcm of 1 to 20 to be ?', function() {
      expect(problem5.solveProblem(20)).toBe(232792560);
    });
  });

});