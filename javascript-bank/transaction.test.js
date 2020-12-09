/* global Transaction, expect */

describe('Transaction', function () {

  beforeEach(function () {
    expect(Transaction).to.be.a('function');
  });

  describe('new Transaction(type, amount)', function () {

    it('has a type property', function () {
      var deposit = new Transaction('deposit', 10);
      expect(deposit)
        .to.have.property('type')
        .that.equals('deposit');
    });

    it('has an amount property', function () {
      var withdrawal = new Transaction('withdrawal', 10);
      expect(withdrawal)
        .to.have.property('amount')
        .that.equals(10);
    });

  });

});
