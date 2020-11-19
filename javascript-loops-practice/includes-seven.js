/* exported includesSeven */
function includesSeven(array) {
  var sevenInches = false;
  for(var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      sevenInches = true;
    }
  }
  return sevenInches;
}
