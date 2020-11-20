/* exported getWords */
function getWords(string) {
  var arr = [];
  if (string === "") {
    return arr;
  }
  var words = string.split(" ");
  return words;
}
