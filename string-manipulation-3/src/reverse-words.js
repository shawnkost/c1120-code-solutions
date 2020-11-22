/* exported reverseWords */
function reverseWords(string) {
  //create new string variables
  var word = "";
  var reversed = "";

  //set i = string.length
  var i = string.length;

  //loop over string decrementing
  while (i-- > 0) {

    //when a space is found concatenate the word variable with the reversed variable and a space to seperate the next value
    //reset word to empty string
    if (string[i] === " ") {
      reversed = " " + word + reversed;
      word = "";
    } else {

      //add characters from the string to the word variable until a space is found
      word += string[i]
    }
  }

  //when the loop ends return the result of concatenating the words and reversed variables
  return word + reversed;
}
