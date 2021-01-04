const add = require("./add");
const subtract = require("./subtract");
const multiply = require("./multiply");
const divide = require("./divide");

if (process.argv[3] === "plus") {
  let num = parseInt(process.argv[2]);
  let num2 = parseInt(process.argv[4]);
  add(num, num2);
}

if (process.argv[3] === "minus") {
  let num = parseInt(process.argv[2]);
  let num2 = parseInt(process.argv[4]);
  subtract(num, num2);
}

if (process.argv[3] === "times") {
  let num = parseInt(process.argv[2]);
  let num2 = parseInt(process.argv[4]);
  multiply(num, num2);
}

if (process.argv[3] === "over") {
  let num = parseInt(process.argv[2]);
  let num2 = parseInt(process.argv[4]);
  divide(num, num2);
}
