/* exported equal */

//define function
function equal(first, second) {

  //check if array lengths are equal
  if(first.length !== second.length) {
    //return boolean
    return false;
  }

  //loop over array
  for (var i = first.length - 1; i >= 0; i--) {

    //check if indexes are equal
    if(first[i] !== second[i]) {

      //return boolean
      return false;
    }
  }

  //return boolean
  return true;
}
