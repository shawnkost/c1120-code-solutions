/* exported isVowel */
function isVowel(char) {
  for (i = 0; i < char.length; i++) {
    var lowerChar= char.toLowerCase()
    if (lowerChar === "a" || lowerChar === "e" || lowerChar === "i" || lowerChar === "o" || lowerChar === "u") {
      return true;
    }
  }
  return false;
}
