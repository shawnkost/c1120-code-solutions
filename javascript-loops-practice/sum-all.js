/* exported sumAll */
function sumAll(numbers) {
  var arr = [];
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
