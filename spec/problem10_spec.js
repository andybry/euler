describe('problem10', function() {

  describe('solveProblem', function() {
    it('calculates the sum of all primes below number', function() {
      spyOn(problem10, 'primesLessThan').andReturn([2, 3, 5, 7]);
      spyOn(problem10, 'sumArray').andReturn(17);
      var actual = problem10.solveProblem(10);
      expect(problem10.primesLessThan).toHaveBeenCalledWith(10);
      expect(problem10.sumArray).toHaveBeenCalledWith([2, 3, 5, 7]);
      expect(actual).toBe(17);
    });
  });
  
  describe('primesLessThan', function() {
    it('calculates the array of primes less than a number', function() {
      spyOn(problem10, 'nextPrime').andCallFake(function(primesSoFar) {
        switch('[' + primesSoFar.join(', ') + ']') {
          case '[]': return 2;
          case '[2]': return 3;
          case '[2, 3]': return 5;
          case '[2, 3, 5]': return 7;
          case '[2, 3, 5, 7]': return 11;
        }
      });
      var actual = problem10.primesLessThan(10);
      expect(problem10.nextPrime).toHaveBeenCalledWith([]);
      expect(problem10.nextPrime).toHaveBeenCalledWith([2]);
      expect(problem10.nextPrime).toHaveBeenCalledWith([2, 3]);
      expect(problem10.nextPrime).toHaveBeenCalledWith([2, 3, 5]);
      expect(problem10.nextPrime).toHaveBeenCalledWith([2, 3, 5, 7]);
      expect(actual).toEqual([2, 3, 5, 7]);
    });
  });
  
  describe('sumArray', function() {
    expect(problem10.sumArray([1, 3, 7])).toBe(11);
  });

  describe('nextPrime', function() {
    it('returns 2 when the array is empty', function() {
      expect(problem10.nextPrime([])).toBe(2);
    });
    it('returns the next number which is not divisible by the elements in the array', function() {
      expect(problem10.nextPrime([2, 3, 5, 7])).toBe(11);
    });
  });
  
  describe('integration tests', function() {
    it('returns 17 when n is 10', function() {
      expect(problem10.solveProblem(10)).toBe(17);
    });
    xit('returns ? when n is 2000000', function() {
      expect(problem10.solveProblem(2000000)).toBe(142913828922);
    });
  });
});