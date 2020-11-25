/* global expect, unique */

describe('unique(array)', function () {

  beforeEach(function () {
    expect(unique).to.be.a('function');
  });

  context('["foo", "bar", "baz", "qux", "bar", "qux", "corge", "baz"]', function () {

    it('returns ["foo", "bar", "baz", "qux", "corge"]', function () {
      var output = unique(['foo', 'bar', 'baz', 'qux', 'bar', 'qux', 'corge', 'baz']);
      expect(output).to.deep.equal(['foo', 'bar', 'baz', 'qux', 'corge']);
    });

  });

  context('[1, 3, 3, 2, 5, 2, 1, 4, 5, 5]', function () {

    it('returns [1, 3, 2, 5, 4]', function () {
      var output = unique([1, 3, 3, 2, 5, 2, 1, 4, 5, 5]);
      expect(output).to.deep.equal([1, 3, 2, 5, 4]);
    });

  });

  context('[false, true, false, true]', function () {

    it('returns [false, true]', function () {
      var output = unique([false, true, false, true]);
      expect(output).to.deep.equal([false, true]);
    });

  });

  context('[]', function () {

    it('returns []', function () {
      var output = unique([]);
      expect(output).to.deep.equal([]);
    });

  });

});
