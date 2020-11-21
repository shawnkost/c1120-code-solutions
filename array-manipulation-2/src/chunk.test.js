/* global expect, banMethods, chunk */

describe('chunk(array, size)', function () {

  beforeEach(function () {
    expect(chunk).to.be.a('function');
    banMethods(chunk, 'shift', 'pop', 'splice');
  });

  it('returns ["foo", "bar", "baz", "qux"] in "chunks" of 2', function () {
    var output = chunk(['foo', 'bar', 'baz', 'qux'], 2);
    expect(output).to.deep.equal([['foo', 'bar'], ['baz', 'qux']]);
  });

  it('returns [undefined, null, 0, false, NaN, ""] in "chunks" of 3', function () {
    var output = chunk([undefined, null, 0, false, NaN, '', undefined], 3);
    expect(output).to.deep.equal([[undefined, null, 0], [false, NaN, ''], [undefined]]);
  });

  it('returns [1, 2, 3, 4, 5] in "chunks" of 1', function () {
    var output = chunk([1, 2, 3, 4, 5], 1);
    expect(output).to.deep.equal([[1], [2], [3], [4], [5]]);
  });

  it('returns [false, true, false, true] in "chunks" of 3', function () {
    var output = chunk([false, true, false, true], 3);
    expect(output).to.deep.equal([[false, true, false], [true]]);
  });

  it('returns [] (empty array) in "chunks" of 7', function () {
    var output = chunk([], 7);
    expect(output).to.deep.equal([]);
  });

});
