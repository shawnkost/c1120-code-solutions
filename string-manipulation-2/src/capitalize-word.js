/* exported capitalizeWord */
function capitalizeWord(word) {
  word = word.toLowerCase();
  if (word == "javascript") {
    return word.charAt(0).toUpperCase() + word.slice(1, 4) + word.charAt(4).toUpperCase() + word.slice(5, word.length);
  }
  return word.charAt(0).toUpperCase() + word.slice(1, word.length);
}
