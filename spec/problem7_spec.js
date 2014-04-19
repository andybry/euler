describe('problem7', function() {

  describe('solveProblem', function() {
    it('calculates each prime until there are n primes then returns the last', function() {
      spyOn(problem7, 'calculateNextPrime').andCallFake(function(ary) {
        switch('[' + ary.join(', ') + ']') {
          case '[]': return 2;
          case '[2]': return 3;
          case '[2, 3]': return 5;
          case '[2, 3, 5]': return 7;
          case '[2, 3, 5, 7]': return 11;
        }
      });
      var actual = problem7.solveProblem(5);
      expect(problem7.calculateNextPrime).toHaveBeenCalledWith([]);
      expect(problem7.calculateNextPrime).toHaveBeenCalledWith([2]);
      expect(problem7.calculateNextPrime).toHaveBeenCalledWith([2, 3]);
      expect(problem7.calculateNextPrime).toHaveBeenCalledWith([2, 3, 5]);
      expect(problem7.calculateNextPrime).toHaveBeenCalledWith([2, 3, 5, 7]);
      expect(actual).toBe(11);
    });
  });
  
  describe('calculateNextPrime', function() {
    describe('when the array of primes is not empty', function() {
      it('calculates the next prime from the first n primes', function () {
        spyOn(problem7, 'isPrime').andCallFake(function (primesBelow, candidate) {
          switch (candidate) {
            case 8:
              return false;
            case 9:
              return false;
            case 10:
              return false;
            case 11:
              return true;
          }
        });
        var primesBelow = [2, 3, 5, 7];
        var actual = problem7.calculateNextPrime(primesBelow);
        expect(problem7.isPrime).toHaveBeenCalledWith(primesBelow, 8);
        expect(problem7.isPrime).toHaveBeenCalledWith(primesBelow, 9);
        expect(problem7.isPrime).toHaveBeenCalledWith(primesBelow, 10);
        expect(problem7.isPrime).toHaveBeenCalledWith(primesBelow, 11);
        expect(actual).toBe(11);
      });
    });
    describe('when the array of primes is empty', function() {
      it('returns 2', function() {
        expect(problem7.calculateNextPrime([])).toBe(2);
      });
    });
  });

  describe('clone', function() {
    it('returns a copy of the array', function() {
      var ary = [1, 2, 3];
      var actual = problem7.clone(ary);
      expect(actual).toEqual(ary);
      expect(actual).toNotBe(ary);
    });
  });
  
  describe('isPrime', function() {
    describe('when the candidate is not divisible by the numbers in ary', function() {
      it('returns true', function() {
        var primes = [2, 3, 5, 7, 11];
        spyOn(primes, 'some').andReturn(false);
        expect(problem7.isPrime(primes, 13)).toBe(true);
      });
    });
    describe('when the candidate is divisible by one of the numbers in ary', function() {
      it('returns false', function() {
        var primes = [2, 3, 5, 7, 11];
        spyOn(primes, 'some').andReturn(true);
        expect(problem7.isPrime(primes, 14)).toBe(false);
      });
    });
  });

  describe('integration tests', function() {
    it('returns 13 when n is 6', function() {
      expect(problem7.solveProblem(6)).toBe(13);
    });
    xit('returns ? when n is 10001', function() {
      expect(problem7.solveProblem(10001)).toBe(104743);
    });
  });
});