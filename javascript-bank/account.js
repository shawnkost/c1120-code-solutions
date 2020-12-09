/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function(amount) {

  var deposit = new Transaction("deposit", amount);

  if (amount > 0 && amount) {
    this.transactions.push(deposit);
    return true;
  } else {
    return false;
  }
}

Account.prototype.withdraw = function(amount) {

  var withdraw = new Transaction("withdraw", amount);

  if (amount > 0 && amount) {
    this.transactions.push(withdraw);
    return true;
  } else {
    return false;
  }

}

Account.prototype.getBalance = function() {

  var balance = 0;

  if (this.balance) {
    balance = this.balance;
  }

  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type == "deposit") {
      balance += this.transactions[i].amount;
    } else {
      balance -= this.transactions[i].amount;
    }
  }
  return balance
}
