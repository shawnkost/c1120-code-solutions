/* global expect, banMethods, takeRight */

describe('takeRight(array, count)', function () {

  beforeEach(function () {
    expect(takeRight).to.be.a('function');
    banMethods(takeRight, 'shift', 'pop', 'splice');
  });

  it('takes the last 2 elements of ["foo", "bar", "baz", "qux"]', function () {
    var output = takeRight(['foo', 'bar', 'baz', 'qux'], 2);
    expect(output).to.deep.equal(['baz', 'qux']);
  });

  it('takes the last element of [1, 2, 3, 4, 5]', function () {
    var output = takeRight([1, 2, 3, 4, 5], 1);
    expect(output).to.deep.equal([5]);
  });

  it('takes the last 3 elements of [false, true, false, true]', function () {
    var output = takeRight([false, true, false, true], 3);
    expect(output).to.deep.equal([true, false, true]);
  });

  it('takes the last 7 elements of [] (empty array)', function () {
    var output = takeRight([], 7);
    expect(output).to.deep.equal([]);
  });

});
