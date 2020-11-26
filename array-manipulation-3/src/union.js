/* exported union */

function union(first, second) {
  var arr = [];

  //loop over the length of the first array
  for (var i = 0; i < first.length; i++)

    //if the value we're currently on is not in the new array, then push it
    if (arr.indexOf(first[i]) === -1) {
      arr.push(first[i]);
    }

  //loop over the length of the second array
  for (var i = 0; i < second.length; i++)

    //if the value we're currently on is not in the new array, then push it
    if (arr.indexOf(second[i]) === -1) {
      arr.push(second[i]);
    }
  return arr;
}
