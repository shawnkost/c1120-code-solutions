/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var arr = string.split("");
  var temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
  return arr.join("");
}
