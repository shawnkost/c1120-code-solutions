/* exported getKeys */
function getKeys(object) {
  var arr = [];
  for (var keys in object) {
    arr.push(keys)
  }
  return arr;
}
