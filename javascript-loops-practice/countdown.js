/* exported countdown */
function countdown(number) {
  var array = [];
  for (var i = number; i >= 0; i--) {
    array.push(i);
  }
  return array;
}
