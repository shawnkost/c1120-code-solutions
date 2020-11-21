/* exported defaults */
function defaults(target, source) {
    for (var property in source) {
        if (!target.hasOwnProperty(property)) {
            target[property] = source[property];
        }
    }
}
//loop over the source object
//check if properties in source object are in target object
//assign properties if they are not in the target object
//skip over properties that are defined in target object
