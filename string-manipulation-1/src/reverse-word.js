/* exported reverseWord */
function reverseWord(word) {
  var reversed = "";
  for (var i = 1; i < word.length + 1; i++) {
    reversed += word.charAt(word.length - i);
  }
   return reversed;
}
