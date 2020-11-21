/* exported omit */
function omit(source, keys) {
    var obj = {};
    for (var key in source) {
        if (keys.indexOf(key) === -1) {
            obj[key] =  source[key];
        }
    }
    return obj;
}
//define a return object
//loop over the source object
//check if value in source object is in keys
//if key is in keys arr go to next loop
//if key is not in keys arr pass key/value pair to new object
