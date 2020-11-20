/* exported getValues */
function getValues(object) {
  var arr = [];
  for (var keys in object) {
    arr.push(object[keys]);
  }
  return arr;
}
