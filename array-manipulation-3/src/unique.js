/* exported unique */

function unique(array) {
  var arr = [];

  //if the array has more than 1 value, push the first value
  if (0 < array.length) {
    arr.push(array[0]);
  }

  //loop over the array length
  for (var i = 1; i < array.length; i++) {

    //if the current value we're on is not in our new array then push it
    if (arr.indexOf(array[i]) === -1) {
      arr.push(array[i]);
    }
  }
  return arr;
}
