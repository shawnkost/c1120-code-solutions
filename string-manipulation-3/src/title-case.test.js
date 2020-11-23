/* global expect, titleCase */

describe('titleCase(string)', function () {

  beforeEach(function () {
    expect(titleCase).to.be.a('function');
  });

  it('title cases "composing software"', function () {
    var input = 'composing software';
    var output = titleCase(input);
    expect(output).to.equal('Composing Software');
  });

  it('title cases "high performance browser networking"', function () {
    var input = 'high performance browser networking';
    var output = titleCase(input);
    expect(output).to.equal('High Performance Browser Networking');
  });

  it('title cases "node.js in action"', function () {
    var input = 'node.js in action';
    var output = titleCase(input);
    expect(output).to.equal('Node.js in Action');
  });

  it('title cases "professional JavaScript for web developers', function () {
    var input = 'professional JavaScript for web developers';
    var output = titleCase(input);
    expect(output).to.equal('Professional JavaScript for Web Developers');
  });

  it('title cases "secrets of the javascript ninja"', function () {
    var input = 'secrets of the javascript ninja';
    var output = titleCase(input);
    expect(output).to.equal('Secrets of the JavaScript Ninja');
  });

  it('title cases "web audio api"', function () {
    var input = 'web audio api';
    var output = titleCase(input);
    expect(output).to.equal('Web Audio API');
  });

  it('title cases "javascript: the definitive guide"', function () {
    var input = 'javascript: the definitive guide';
    var output = titleCase(input);
    expect(output).to.equal('JavaScript: The Definitive Guide');
  });

  it('title cases "speaking Javascript: an in-depth guide for programmers"', function () {
    var input = 'speaking Javascript: an in-depth guide for programmers';
    var output = titleCase(input);
    expect(output).to.equal('Speaking JavaScript: An In-Depth Guide for Programmers');
  });

});
