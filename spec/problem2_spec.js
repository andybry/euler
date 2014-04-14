describe('problem2', function() {

  describe('solveProblem', function() {
     it('finds all the Fibonacci numbers up to n, filters them for even numbers and returns the sum', function() {
       spyOn(problem2, 'fibonacciLessThan').andReturn([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
       spyOn(problem2, 'filterForEven').andReturn([2, 8, 34]);
       spyOn(problem2, 'sumArray').andReturn(44);
       var actual = problem2.solveProblem(90);
       expect(problem2.fibonacciLessThan).toHaveBeenCalledWith(90);
       expect(problem2.filterForEven).toHaveBeenCalledWith([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
       expect(problem2.sumArray).toHaveBeenCalledWith([2, 8 , 34]);
       expect(actual).toBe(44);
     });
  });

  describe('fibonacciLessThan', function() {
    describe('when n is 25', function() {
      it('returns [1, 2, 3, 5, 8, 13, 21]', function() {
        spyOn(problem2, 'addFibonacciNumberTo').andCallFake(function(ary) {
          switch('[' + ary.join(', ') + ']') {
            case ('[]'): return [1];
            case ('[1]'): return [1, 2];
            case ('[1, 2]'): return [1, 2, 3];
            case ('[1, 2, 3]'): return [1, 2, 3, 5];
            case ('[1, 2, 3, 5]'): return [1, 2, 3, 5, 8];
            case ('[1, 2, 3, 5, 8]'): return [1, 2, 3, 5, 8, 13];
            case ('[1, 2, 3, 5, 8, 13]'): return [1, 2, 3, 5, 8, 13, 21];
            case ('[1, 2, 3, 5, 8, 13, 21]'): return [1, 2, 3, 5, 8, 13, 21, 34];
          }
        });
        expect(problem2.fibonacciLessThan(25)).toEqual([1, 2, 3, 5, 8, 13, 21]);
      });
    });
  });

  describe('filterForEven', function() {
    it('returns the array ary with all the odd terms removed', function() {
      expect(problem2.filterForEven([1, 5, 4, -12, 3, 27])).toEqual([4, -12]);
    });
  });

  describe('sumArray', function() {
    it('returns the sum of all the elements in the array', function() {
      expect(problem2.sumArray([1, 10, 5, 20, 3])).toBe(39);
    });
  });

  describe('addFibonacciNumberTo', function() {
    describe('when ary is []', function() {
      it('returns [1]', function() {
        spyOn(problem2, 'copyArray').andReturn([]);
        expect(problem2.addFibonacciNumberTo([])).toEqual([1]);
      });
    });
    describe('when ary is an array of length 1', function() {
      it('returns [1, 2]', function() {
        spyOn(problem2, 'copyArray').andReturn([1]);
        expect(problem2.addFibonacciNumberTo([1])).toEqual([1, 2]);
      });
    });
    describe('when ary is an array of length greater than 2', function() {
      it('returns a copy of ary with another element added that is the some of the previous last two', function() {
        spyOn(problem2, 'copyArray').andReturn([1, 3, 7]);
        expect(problem2.addFibonacciNumberTo([1, 3, 7])).toEqual([1, 3, 7, 10]);
      });
    });
  });

  describe('copyArray', function() {
    it('returns a copy of the original array', function() {
      var original = [1, 2, 5];
      var copy = problem2.copyArray(original);
      expect(copy).toEqual(original);
      expect(copy).toNotBe(original);
    })
  });

  describe('integration tests', function() {
    describe('when n is 90', function() {
      it('returns 2 + 8 = 44', function() {
        expect(problem2.solveProblem(90)).toBe(44);
      });
    });
    describe('when n is 4000000', function() {
      it('returns ?', function() {
        expect(problem2.solveProblem(4000000)).toBe(4613732);
      });
    });
  });

});