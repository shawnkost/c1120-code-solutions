/* exported drop */
function drop(array, count) {
  var arr = [];
  if (array.length) {
    for (var i = count; i < array.length; i++) {
      arr.push(array[i]);
    }
  }
  return arr;
}
