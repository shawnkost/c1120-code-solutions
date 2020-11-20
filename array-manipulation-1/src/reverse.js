/* exported reverse */
function reverse(array) {
  var arr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    arr.push(array[i]);
  }
  return arr;
}
