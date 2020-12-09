function exampleConstructor () {

}

console.log("value of prototype property:", exampleConstructor.prototype);

console.log("typeof prototype property:", typeof exampleConstructor.prototype);

var newFunction = new exampleConstructor();

console.log("value of newFunction:", newFunction);

var newInstance = newFunction instanceof exampleConstructor;

console.log("value of newInstance:", newInstance);
