/* exported compact */
function compact(input) {
  var arr = [];
  for (var i = 0; i < input.length; i++) {
    if (input[i]) {
      arr.push(input[i]);
    }
  }
  return arr;
}
