describe('problem3', function() {

  describe('solveProblem', function() {
    it('finds the largest prime factor of n', function() {
      spyOn(problem3, 'removeAllFactorsOf').andCallFake(function(num, n) {
        switch(n) {
          case 2: return 15; // num = 120 at start
          case 3: return 5; // num = 15 at start
          case 4: return 5; // num = 5 at start
          case 5: return 1; // num = 5 at start
        }
      });
      var actual = problem3.solveProblem(120);
      expect(problem3.removeAllFactorsOf).toHaveBeenCalledWith(120, 2);
      expect(problem3.removeAllFactorsOf).toHaveBeenCalledWith(15, 3);
      expect(problem3.removeAllFactorsOf).toHaveBeenCalledWith(5, 4);
      expect(problem3.removeAllFactorsOf).toHaveBeenCalledWith(5, 5);
      expect(actual).toBe(5);
    });
  });
  
  describe('remove all factors of a given factor from the product', function() {
    expect(problem3.removeAllFactorsOf(54, 3)).toBe(2); // 54 = 2 * 3 ^ 3
  });

  describe('integration tests', function() {
    describe('when n is 13195', function() {
      it('returns 29 (the largest of 5, 7, 13, 29)', function() {
        expect(problem3.solveProblem(13195)).toBe(29);
      });
    });
    describe('when n is 600851475143', function() {
      it('returns ?', function() {
        expect(problem3.solveProblem(600851475143)).toBe(6857);
      });
    });
  });

});