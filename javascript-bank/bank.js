/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function(holder, balance) {

  if (balance > 0 && balance) {

    var newAcct = new Account(this.nextAccountNumber, holder);

    newAcct.balance = balance;

    this.accounts.push(newAcct);

    this.nextAccountNumber++;

    return newAcct.number;

  } else {

    return null;

  }

}



Bank.prototype.getAccount = function(number) {

  for (var k = 0; k < this.accounts.length; k++) {

    if (this.accounts[k].number == number) {
      return this.accounts[k];
    }
  }
  return null;
}

Bank.prototype.getTotalAssets = function() {

  var totalAssets = 0;

  for (var l = 0; l < this.accounts.length; l++) {
      totalAssets += this.accounts[l].getBalance();
  }
  return totalAssets;
}
