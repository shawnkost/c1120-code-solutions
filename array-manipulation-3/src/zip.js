/* exported zip */

function zip(first, second) {
  var arr = [];
  var temp = [];
  var res = [];

  //check which array has the shorter length
  if (first.length > second.length) {
   res = second;
 } else {
   res = first;
 }

  //loop over the smaller array
 for (var i = 0; i < res.length; i++) {

    //reset temp array with each loop
    temp = [];

    //push each index to temp array
    temp.push(first[i]);
    temp.push(second[i]);

    //push temp array into return array
    arr.push(temp);
  }
  return arr;
}
