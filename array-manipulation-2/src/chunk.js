/* exported chunk */
function chunk(array, size) {
  var res = [];
  var temp = [];
  for (var i = 0; i < array.length;) {
    temp = [];
    for (var x = 0; x < size; x++) {
      if (i + x < array.length) {
        temp.push(array[i + x]);
      }
    }
    i += size;
    res.push(temp);
  }
  return res;
}
