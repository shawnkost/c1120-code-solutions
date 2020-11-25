var $name = document.getElementById("name-input");
var $email = document.getElementById("email-input");
var $message = document.querySelector("textarea");

function handleFocus(event) {
  console.log("Focus event was fired");
  console.log("event.target.name:", event.target.name);
}

function handleBlur(event) {
  console.log("Blur event was fired");
  console.log("event.target.name:", event.target.name);
}

function handleInput(event) {
  console.log("value of name:", event.target.name + " " + event.target.value);
}


$name.addEventListener("focus", handleFocus);
$name.addEventListener("blur", handleBlur);
$name.addEventListener("input", handleInput);
$email.addEventListener("focus", handleFocus);
$email.addEventListener("blur", handleBlur);
$email.addEventListener("input", handleInput);
$message.addEventListener("focus", handleFocus);
$message.addEventListener("blur", handleBlur);
$message.addEventListener("input", handleInput);
