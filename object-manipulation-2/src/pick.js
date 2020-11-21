/* exported pick */
function pick(source, keys) {
    var obj = {}
    for (var i = 0; i < keys.length; i++) {
        if (source.hasOwnProperty([keys[i]]) && source[keys[i]] !== undefined) {
            obj[keys[i]] = source[keys[i]]
        }
    }
    return obj;
}
// create function
// creating a new object
// loop over keys paramaters
// check if value[i] is a key in source object parameter
// if found add key/value pair to obj
// if not found go to next loop
