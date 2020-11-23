/* exported isAnagram */
function isAnagram(firstString, secondString) {
  //remove spaces from the strings
  firstString = firstString.split(" ").join("")
  secondString = secondString.split(" ").join("")

  //split the strings into arrays/sort them/join them back into strings
  //see if the strings are equal to each other
  //return true if yes
  //return false if not
  return firstString.split("").sort().join("") === secondString.split("").sort().join("")
}
