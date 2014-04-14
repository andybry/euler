describe('problem3', function() {

  describe('solveProblem', function() {
    it('finds the factors of n, calculates primes and returns the largest', function() {
      spyOn(problem3, 'getFactors').andReturn([2, 4, 5, 10]);
      spyOn(problem3, 'filterProducts').andReturn([2, 5]);
      var actual = problem3.solveProblem(20);
      expect(problem3.getFactors).toHaveBeenCalledWith(20);
      expect(problem3.filterProducts).toHaveBeenCalledWith([2, 4, 5, 10]);
      expect(actual).toBe(5);
    });
  });
  
  describe('getFactors', function() {
    it('returns the array of factors of n', function() {
      expect(problem3.getFactors(20)).toEqual([2, 4, 5, 10]);
    });
  });
  
  describe('filterProducts', function() {
    it('removes all elements which are divisible by integers (non primes)', function() {
      spyOn(problem3, 'filterProductsOf').andCallFake(function(ary, num) {
        switch(num) {
          case 2: return [2, 5];
          case 3: return [2, 5];
          case 4: return [2, 5];
          case 5: return [2, 5];
        }
      });
      expect(problem3.filterProducts([2, 4, 5, 6])).toEqual([2, 5]);
    });
  });
  
  describe('filterProductsOf', function() {
    it('removes all multiples of the number from the array apart from itself', function() {
      expect(problem3.filterProductsOf([3, 4, 5, 6, 7], 3)).toEqual([3, 4, 5, 7]);
    });
  });
  
  describe('integration tests', function() {
    describe('when n is 13195', function() {
      it('returns 29 (the largest of 5, 7, 13, 29)', function() {
        expect(problem3.solveProblem(13195)).toBe(29);
      });
    });
    // TODO: improve algorithm so that it can be run against this
    xdescribe('when n is 600851475143', function() {
      it('returns ?', function() {
        expect(problem3.solveProblem(600851475143)).toBe(0);
      });
    });
  });

});