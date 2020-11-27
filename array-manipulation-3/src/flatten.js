/* exported flatten */

function flatten(array) {
  var arr = [];

  //loop over the array length
  for (var i = 0; i < array.length; i++) {

    //check if input is an array
    if (Array.isArray(array[i]) === false) {

      //if it's not an array, push the value to new array
      arr.push(array[i]);
    } else {

      //loop over the array index
      for (var k = 0; k < array[i].length; k++) {

        //push value from the input array to the new array
        arr.push(array[i][k]);
      }
    }
  }
  return arr;
}
