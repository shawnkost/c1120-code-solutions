/* exported invert */
function invert(source) {
    var obj = {};
    for (var key in source) {
        var temp = source[key];
        obj[temp] = key;
    }
    return obj;
}
//make a return variable
//loop through source object
//assign object keys value to new variable
//build new key value pair
//return object
