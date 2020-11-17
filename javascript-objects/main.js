/* eslint-disable no-console, no-unused-vars, dot-notation */
var student = {
  firstName: "Shawn",
  lastName: "Kost",
  age: 22
};

var fullName = student.firstName + " " + student.lastName;
console.log("value of fullName:", fullName);

student.livesInIrvine = true;
student.previousOccupation = "computer technician";
console.log("value of livesInIrvine:", student.livesInIrvine);
console.log("value of previousOccupation:", student.previousOccupation);

var vehicle = {
  make: "Mazda",
  model: "3",
  year: 2016
};

vehicle["color"] = "blue";
vehicle["isConvertible"] = false;
console.log("value of color:", vehicle["color"]);
console.log("value of isConvertible:", vehicle["isConvertible"]);
console.log("value of vehicle object:", vehicle);

var pet = {
  name: "Lily",
  type: "Cat"
}
delete pet.name;
delete pet.type;
console.log("value of pet:", pet);
