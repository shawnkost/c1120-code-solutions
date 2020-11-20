/* exported isLowerCased */
function isLowerCased(word) {
  var lower = false;
  for (i = 0; i < word.length; i++) {
    if (word === word.toLowerCase()) {
      return true;
    }
  }
  return false;
}
