describe('problem8', function() {

  describe('solveProblem', function() {
    it('calculates the largest sum of n consecutive numbers in a given number', function() {
      spyOn(problem8, 'splitToDigits').andReturn([1, 8, 9, 7, 3]);
      spyOn(problem8, 'findArraysOfLength').andReturn([
        [1, 8, 9],
        [8, 9, 7],
        [9, 7, 3]
      ]);
      spyOn(problem8, 'findProducts').andReturn([72, 504, 189]);
      spyOn(problem8, 'sortArray').andReturn([72, 189, 504]);
      var actual = problem8.solveProblem('18973', 3);
      expect(problem8.splitToDigits).toHaveBeenCalledWith('18973');
      expect(problem8.findArraysOfLength).toHaveBeenCalledWith([1, 8, 9, 7, 3], 3);
      expect(problem8.findProducts).toHaveBeenCalledWith([
        [1, 8, 9],
        [8, 9, 7],
        [9, 7, 3]
      ]);
      expect(problem8.sortArray).toHaveBeenCalledWith([72, 504, 189]);
      expect(actual).toBe(504);
    });
  });

  describe('splitToDigits', function() {
    it('splits a number into an array of its digits', function() {
      expect(problem8.splitToDigits('17520')).toEqual([1, 7, 5, 2, 0]);
    });
  });

  describe('findArraysOfLength', function() {
    it('finds all sub arrays of a given length', function() {
      var ary = [3, 5, 2, 9, 7];
      var actual = problem8.findArraysOfLength(ary, 3);
      expect(actual).toEqual([
        [3, 5, 2],
        [5, 2, 9],
        [2, 9, 7]
      ]);
    });
  });
  
  describe('findProducts', function() {
    it('maps the array of arrays to the product of each array', function() {
      spyOn(problem8, 'findProduct').andCallFake(function(childAry) {
        switch('[' + childAry.join(', ') + ']') {
          case '[1, 5, 9]': return 45;
          case '[3, 2, 5]': return 30;
          case '[5, 3, 1]': return 15;
        }
      });
      var actual = problem8.findProducts([
        [1, 5, 9],
        [3, 2, 5],
        [5, 3, 1]
      ]);
      expect(problem8.findProduct).toHaveBeenCalledWith([1, 5, 9]);
      expect(problem8.findProduct).toHaveBeenCalledWith([3, 2, 5]);
      expect(problem8.findProduct).toHaveBeenCalledWith([5, 3, 1]);
      expect(actual).toEqual([45, 30, 15]);
    });
  });
  
  describe('sortArray', function() {
    it('sorts the elements in a copy of the array', function() {
      expect(problem8.sortArray([7, 1, 8, 9, 3])).toEqual([1, 3, 7, 8, 9]);
    });
  });
  
  describe('findProduct', function() {
    it('multiplies the elements in the array', function() {
      expect(problem8.findProduct([1, 8, 5])).toBe(40);
    });
  });

  describe('integration tests', function() {
    it('returns ? for the 1000 digit number with arrays of length 5', function() {
      expect(problem8.solveProblem(
        '7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450',
        5
      )).toBe(40824);
    });
  });

});