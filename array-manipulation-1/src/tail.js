/* exported tail */
function tail(array) {
  var arr = [];
  for (var i = 1; i < array.length; i++) {
    arr.push(array[i])
  }
  return arr;
}
