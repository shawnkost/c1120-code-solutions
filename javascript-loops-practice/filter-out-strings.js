/* exported filterOutStrings */
function filterOutStrings(values) {
  var arr = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== "string") {
      arr.push(values[i]);
    }
  }
  return arr;
}
