/* exported isPalindromic */
function isPalindromic(string) {
  //remove spaces
  string = string.split(" ").join("")

  //loop over the string
  for (var i = 0; i < string.length / 2; i++) {

    //check if character in the current iteration is the same as the character towards the end
    if (string.charAt(i) !== string.charAt(string.length - 1 - i)) {

      //return false if not
      return false;
    }
  }

  //return true if so
  return true;
}
