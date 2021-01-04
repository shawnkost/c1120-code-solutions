const printMessage = message => {
  console.log(message);
}

printMessage("Hello, just a moment");
setTimeout(printMessage, 2000, "Thanks for waiting!");
