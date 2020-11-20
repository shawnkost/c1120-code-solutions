/* exported isUpperCased */
function isUpperCased(word) {
  var upper = false;
  for (var i = 0; i < word.length; i++) {
    if (word === word.toUpperCase()) {
      return true;
    }
  }
  return upper;
}
