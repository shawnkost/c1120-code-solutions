function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log("value of convertMinutesToSeconds:", convertMinutesToSeconds(5));

function greet(name) {
  return "Hey, " + name;
}
console.log("value of greet:", greet("Shawn"));

function getArea (width, height) {
  return width * height;
}
console.log("value of getArea:", getArea(17, 42));

function getFirstName (person) {
  return person.firstName;
}
console.log("value of getFirstName:", getFirstName({ firstName: "Shawn", lastName: "Kost" }));

function getLastElement (array) {
  return array[3];
}
console.log("value of getLastElement:", getLastElement(["propane", "and", "propane", "accessories"]));
