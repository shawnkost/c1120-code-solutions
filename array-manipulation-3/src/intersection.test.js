/* global expect, intersection */

describe('intersection(first, second)', function () {

  beforeEach(function () {
    expect(intersection).to.be.a('function');
  });

  context('[2, 1] and [2, 3]', function () {

    it('returns [2]', function () {
      var output = intersection([2, 1], [2, 3]);
      expect(output).to.deep.equal([2]);
    });

  });

  context('["html", "css", "javascript"] and ["php", "css", "sql"]', function () {

    it('returns ["css"]', function () {
      var output = intersection(
        ['html', 'css', 'javascript'],
        ['php', 'css', 'sql']
      );
      expect(output).to.deep.equal(['css']);
    });

  });

  context('["a", "link", "to", "the", "past"] and ["the", "adventure", "of", "link"]', function () {

    it('returns ["link", "the"]', function () {
      var output = intersection(
        ['a', 'link', 'to', 'the', 'past'],
        ['the', 'adventure', 'of', 'link']
      );
      expect(output).to.deep.equal(['link', 'the']);
    });

  });

});
