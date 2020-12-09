/* global Account, expect */

describe('Account', function () {

  beforeEach(function () {
    expect(Account).to.be.a('function');
  });

  it('has a deposit() prototype method', function () {
    expect(Account).to.respondTo('deposit');
  });

  it('has a withdraw() prototype method', function () {
    expect(Account).to.respondTo('withdraw');
  });

  it('has a getBalance() prototype method', function () {
    expect(Account).to.respondTo('getBalance');
  });

  describe('new Account(number, holder)', function () {

    it('has a number property', function () {
      var checking = new Account(42, 'Jeff Jefferson');
      expect(checking)
        .to.have.property('number')
        .that.equals(42);
    });

    it('has a holder property', function () {
      var savings = new Account(5, 'Speed Racer');
      expect(savings)
        .to.have.property('holder')
        .that.equals('Speed Racer');
    });

    it('has a transactions property initalized to an empty array', function () {
      var lockbox = new Account(5, 'Speed Racer');
      expect(lockbox)
        .to.have.property('transactions')
        .that.is.an('array')
        .with.lengthOf(0);
    });

  });

  describe('account.deposit(amount)', function () {

    context('when amount is not a positive number', function () {

      it('returns false', function () {
        var account = new Account(1, 'Richy Rich');
        expect(account.deposit(-1000)).to.equal(false);
        expect(account.deposit('fake money')).to.equal(false);
        expect(account.deposit(NaN)).to.equal(false);
        expect(account.deposit(0)).to.equal(false);
      });

    });

    context('when amount is a positive number', function () {

      it('returns true', function () {
        var account = new Account(2, 'Poor Richard');
        expect(account.deposit(1000)).to.equal(true);
        expect(account.deposit(5)).to.equal(true);
        expect(account.deposit(42)).to.equal(true);
      });

    });

  });

  describe('account.withdraw(amount)', function () {

    context('when amount is not a positive number', function () {

      it('returns false', function () {
        var account = new Account(1, 'Richy Rich');
        expect(account.withdraw(-1000)).to.equal(false);
        expect(account.withdraw('fake money')).to.equal(false);
        expect(account.withdraw(NaN)).to.equal(false);
      });

    });

    context('when amount is a positive number', function () {

      it('returns true', function () {
        var account = new Account(2, 'Poor Richard');
        expect(account.withdraw(1000)).to.equal(true);
        expect(account.withdraw(5)).to.equal(true);
        expect(account.withdraw(42)).to.equal(true);
      });

    });

  });

  describe('account.getBalance()', function () {

    context('when the account has no transaction history', function () {

      it('returns 0', function () {
        var account = new Account(42, 'Jeff Jefferson');
        var balance = account.getBalance();
        expect(balance).to.equal(0);
        expect(account.transactions).to.have.lengthOf(0);
      });

    });

    context('when the account has a transaction history', function () {

      it('returns the balance of those transactions', function () {
        var account = new Account(42, 'Jeff Jefferson');
        account.deposit(100);
        account.withdraw(23);
        account.withdraw(5);
        account.deposit(88);
        expect(account.getBalance()).to.equal(160);
        expect(account.transactions).to.have.lengthOf(4);
      });

    });

  });

});
