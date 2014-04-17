describe('problem4', function () {

  describe('solveProblem', function () {
    it('calculates all multiples of 2 n digit numbers and selects the largest palindrome', function () {
      spyOn(problem4, 'multsOf2NDigitNums').andReturn([9009, 8100, 9801, 9702]);
      spyOn(problem4, 'sortDescending').andReturn([9801, 9702, 9009, 8100]);
      spyOn(problem4, 'selectFirstPalindrome').andReturn(9009);
      var actual = problem4.solveProblem(2);
      expect(problem4.multsOf2NDigitNums).toHaveBeenCalledWith(2);
      expect(problem4.sortDescending).toHaveBeenCalledWith([9009, 8100, 9801, 9702]);
      expect(problem4.selectFirstPalindrome).toHaveBeenCalledWith([9801, 9702, 9009, 8100]);
      expect(actual).toBe(9009);
    });
  });

  describe('multsOf2NDigitNums', function () {
    it('returns all multiples of 2 n digit numbers', function () {
      spyOn(problem4, 'smallestNumberWithNDigits').andReturn(3);
      spyOn(problem4, 'largestNumberWithNDigits').andReturn(5);
      expect(problem4.multsOf2NDigitNums(2)).toEqual([
        9, 12, 15, // multiples of 3
        12, 16, 20, // multiples of 4,
        15, 20, 25 // multiples of 5
      ]);
    });
  });

  describe('sortDescending', function () {
    it('sorts an array of numbers in descending order', function () {
      expect(problem4.sortDescending([3, 5, 1, 10])).toEqual([10, 5, 3, 1]);
    });
  });

  describe('selectFirstPalindrome', function () {
    it('returns the first element of an array that is a palindrome', function () {
       spyOn(problem4, 'isPalindrome').andCallFake(function(candidate) {
         switch(candidate) {
           case 1223: return false;
           case 1332: return false;
           case 1221: return true;
         };
       });
       expect(problem4.selectFirstPalindrome([1223, 1332, 1221, 1111])).toBe(1221);
    });
  });
  
  describe('smallestNumberWithNDigits', function() {
    it('returns the smallest number with the given number of digits', function() {
      expect(problem4.smallestNumberWithNDigits(4)).toBe(1000);
    });
  });
  
  describe('largestNumberWithNDigits', function() {
    it('returns the smallest number with the given number of digits', function() {
      expect(problem4.largestNumberWithNDigits(4)).toBe(9999);
    });
  });

  describe('isPalindrome', function() {
    describe('when the number is a palindrome', function() {
      it('returns true', function() {
        spyOn(problem4, 'reverse').andReturn(123321);
        var actual = problem4.isPalindrome(123321);
        expect(problem4.reverse).toHaveBeenCalledWith('123321');
        expect(actual).toBe(true);
      });
    });

    describe('when the number is not a palindrome', function() {
      it('returns false', function() {
        spyOn(problem4, 'reverse').andReturn(126433321);
        var actual = problem4.isPalindrome(123334621);
        expect(problem4.reverse).toHaveBeenCalledWith('123334621');
        expect(actual).toBe(false);
      });
    });
  });

  describe('reverse', function() {
    it('reverses the letters in a string', function() {
      expect(problem4.reverse('Andrew')).toEqual('werdnA');
    });
  });

  describe('integration tests', function() {
    it('returns 9009 when the number of digits is 2', function() {
      expect(problem4.solveProblem(2)).toBe(9009);
    });
    it('returns ? when the number of digits is 3', function() {
      expect(problem4.solveProblem(3)).toBe(906609);
    });
  });

});