/* exported findIndex */
function findIndex(array, value) {
  var whatever = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return whatever;
}
