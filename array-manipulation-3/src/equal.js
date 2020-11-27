/* exported equal */

function equal(first, second) {

  //check if array lengths are equal
  if(first.length !== second.length) {
    return false;
  }

  //loop over length of first array
  for (var i = first.length - 1; i >= 0; i--) {

    //check if indexes are equal
    if(first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
