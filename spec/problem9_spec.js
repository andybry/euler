describe('problem9', function() {

  describe('solveProblem', function() {
    it('finds the pythagorean triple where a + b + c = n', function() {
      spyOn(problem9, 'pythagoreans').andReturn([3, 4, 5]);
      spyOn(problem9, 'findTripleWithSum').andReturn([3, 4, 5]);
      spyOn(problem9, 'product').andReturn(60);
      var actual = problem9.solveProblem(13);
      expect(problem9.pythagoreans).toHaveBeenCalledWith(13);
      expect(problem9.findTripleWithSum).toHaveBeenCalledWith([3, 4, 5], 13);
      expect(problem9.product).toHaveBeenCalledWith([3, 4, 5]);
      expect(actual).toEqual(60);
    });
  });

  describe('pythagoreans', function() {
    spyOn(problem9, 'monotonicPairs').andReturn([
      [1, 2],
      [3, 4]
    ]);
    spyOn(problem9, 'potentialPythagoreans').andReturn([
      [1, 2, 2.236],
      [3, 4, 5]
    ]);
    spyOn(problem9, 'filterForPythagoreans').andReturn([
      [3, 4, 5]
    ]);
    var actual = problem9.pythagoreans(13);
    expect(problem9.monotonicPairs).toHaveBeenCalledWith(13);
    expect(problem9.potentialPythagoreans).toHaveBeenCalledWith([
      [1, 2],
      [3, 4]
    ]);
    expect(problem9.filterForPythagoreans).toHaveBeenCalledWith([
      [1, 2, 2.236],
      [3, 4, 5]
    ]);
    expect(actual).toEqual([
      [3, 4, 5]
    ]);
  });

  describe('findTripleWithSum', function() {
    it('returns the first triple with the given sum', function() {
      spyOn(problem9, 'sumArray').andCallFake(function(ary) {
        switch('[' + ary.join(', ') + ']') {
          case '[1, 2, 1]': return 4;
          case '[1, 2, 3]': return 6;
        }
      });
      var actual = problem9.findTripleWithSum([
        [1, 2, 1],
        [1, 2, 3],
        [1, 1, 2]
      ], 6);
      expect(problem9.sumArray).toHaveBeenCalledWith([1, 2, 1]);
      expect(problem9.sumArray).toHaveBeenCalledWith([1, 2, 3]);
      expect(actual).toEqual([1, 2, 3]);
    });
  });

  describe('product', function() {
    it('returns the product of all elements', function() {
      expect(problem9.product([2, 7, 9])).toBe(126);
    });
  });
  
  describe('monotonicPairs', function() {
    it('calculates all monotonic pairs from numbers up to n', function() {
      expect(problem9.monotonicPairs(4)).toEqual([
        [1, 2],
        [1, 3],
        [1, 4],
        [2, 3],
        [2, 4],
        [3, 4]
      ]);
    });
  });
  
  describe('potentialPythagoreans', function() {
    it('adds the square root of the sum of the squares to each element', function () {
      expect(problem9.potentialPythagoreans([
        [1, 2],
        [3, 4]
      ])).toEqual([
        [1, 2, Math.sqrt(5)],
        [3, 4, 5]
      ]);
    });
  });

  describe('filterForPythagoreans', function() {
    describe('when the input array contains final elements that are not integers', function() {
      it('filters them from the array', function() {
        spyOn(problem9, 'isInteger').andCallFake(function(candidate) {
          switch(candidate) {
            case 5.4: return false;
            case 3: return true;
            case 5: return true;
            case 1.141: return false;
          }
        });
        var actual = problem9.filterForPythagoreans([
          [1, 2, 5.4],
          [1, 2, 3],
          [3, 3, 5],
          [2, 3, 1.141]
        ]);
        expect(problem9.isInteger).toHaveBeenCalledWith(5.4);
        expect(problem9.isInteger).toHaveBeenCalledWith(3);
        expect(problem9.isInteger).toHaveBeenCalledWith(5);
        expect(problem9.isInteger).toHaveBeenCalledWith(1.141);
        expect(actual).toEqual([
          [1, 2, 3],
          [3, 3, 5]
        ]);
      });
    });
  });
  
  describe('sumArray', function() {
    it('returns the sum of the elements in the array', function() {
      expect(problem9.sumArray([1, 2, 3])).toBe(6);
    });
  });
  
  describe('isInteger', function() {
    describe('when number is an integer', function() {
      it('returns true', function() {
        expect(problem9.isInteger(5)).toBe(true);
      });
    });
    describe('when number is not an integer', function() {
      it('returns false', function() {
        expect(problem9.isInteger(5.4)).toBe(false);
      });
    });
  });
  
  describe('integration tests', function() {
    it('returns 3 * 4 * 5 = 60 when number is 12', function() {
      expect(problem9.solveProblem(12)).toBe(60);
    });
    xit('returns ? when number is 1000', function() {
      expect(problem9.solveProblem(1000)).toBe(31875000);
    });
  });

});
