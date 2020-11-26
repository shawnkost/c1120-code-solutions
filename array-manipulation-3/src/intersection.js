/* exported intersection */

function intersection(first, second) {
  var arr = [];

  //loop over the first array length
  for (var i = 0; i < first.length; i++) {

    //if the value we're currently on is not in the second array, push it to our new array
    if (second.indexOf(first[i]) !== -1) {
      arr.push(first[i]);
    }
  }
  return arr;
}
