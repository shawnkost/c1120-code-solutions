/* eslint-disable no-console */
var width = 10;
var height = 12;
var area = width * height;
console.log('value of area:', area);
console.log("typeof area:", typeof area);

var bill = 24;
var payment = 114;
var change = payment - bill;
console.log("Total of payment minus bill:", change);
console.log("typeof change:", typeof change);

var quizzes = 2;
var midterm = 12;
var final = 40;
var grade = (quizzes + midterm + final) / 3;
console.log("value of grade:", grade);
console.log("typeof grade:", typeof grade);

var firstName = "Shawn";
var lastName = "Kost";
var fullName = firstName + " " + lastName;
console.log("value of fullName:", fullName);
console.log("typeof fullName:", typeof fullName);

var pH = 4;
var isAcidic = pH < 7;
console.log("value of isAcidic:", isAcidic);
console.log("typeof isAcidic:", typeof isAcidic);

var headCount = 47;
var isSparta = headCount === 300;
console.log("value of isSparta:", isSparta);
console.log("typeof isSparta:", typeof isSparta);

var motto = fullName;
var motto = motto + " is the Goat";
console.log("value of motto:", motto);
console.log("typeof motto:", typeof motto);
