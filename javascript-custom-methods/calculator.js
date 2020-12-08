/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },

  subtract: function (x, y) {
    return x - y;
  },

  multiply: function (x, y) {
    return x * y;
  },

  divide: function (x, y) {
    return x / y;
  },

  square: function (x) {
    return Math.pow(x, 2);
  },

  sumAll: function (numbers) {
    var newNum = 0
    for (var i = 0; i < numbers.length; i++) {
      newNum += numbers[i];
    }
    return newNum;
  },

  getAverage: function (numbers) {
    var average = 0;
    for (var k = 0; k < numbers.length; k++) {
      average += numbers[k];
    }
    average = average / numbers.length;
    return average;
  }
}
