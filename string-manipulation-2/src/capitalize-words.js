/* exported capitalizeWords */
function capitalizeWords(string) {
  var arr = string.toLowerCase().split(' ');
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
  }
  return arr.join(' ');
}
