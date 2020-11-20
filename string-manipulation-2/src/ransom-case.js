/* exported ransomCase */
function ransomCase(string) {
  var res = ""
  string.toLowerCase()
  for (var i = 0; i < string.length; i++) {
   if(i % 2 == 0) {
    res += string.charAt(i).toLowerCase()
   } else {
    res += string.charAt(i).toUpperCase()
   }
  }
  return res;
}
