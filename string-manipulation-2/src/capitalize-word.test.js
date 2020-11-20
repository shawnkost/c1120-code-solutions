/* global expect, capitalizeWord */

describe('capitalizeWord(word)', function () {

  beforeEach(function () {
    expect(capitalizeWord).to.be.a('function');
  });

  it('capitalizes "foo"', function () {
    var input = 'foo';
    var output = capitalizeWord(input);
    expect(output).to.equal('Foo');
  });

  it('capitalizes "BAR"', function () {
    var input = 'BAR';
    var output = capitalizeWord(input);
    expect(output).to.equal('Bar');
  });

  it('capitalizes "bAZ"', function () {
    var input = 'bAZ';
    var output = capitalizeWord(input);
    expect(output).to.equal('Baz');
  });

  it('capitalizes "qUx"', function () {
    var input = 'qUx';
    var output = capitalizeWord(input);
    expect(output).to.equal('Qux');
  });

  it('capitalizes "jaVAsCrIPt"', function () {
    var input = 'jaVAsCrIPt';
    var output = capitalizeWord(input);
    expect(output).to.equal('JavaScript');
  });

  it('capitalizes "javaScript"', function () {
    var input = 'javaScript';
    var output = capitalizeWord(input);
    expect(output).to.equal('JavaScript');
  });

  it('capitalizes "JavascRipt"', function () {
    var input = 'JavascRipt';
    var output = capitalizeWord(input);
    expect(output).to.equal('JavaScript');
  });

});
