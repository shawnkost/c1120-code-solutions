var span = document.querySelectorAll("span");
var text = document.querySelector("h1");
var body = document.querySelector("body");
var i = 0;
span[i].className = "active";
body.addEventListener("keydown", characterPress);
function characterPress(event) {
  span[i].className = "active";
  if (span[i].textContent !== event.key) {
    span[i].className = "red active";
  } else {
    span[i].className = "green";
    i++;
    span[i].className = "active";
  }

}

//start on first character
//if inputed correctly change the class so the letter turns green
//if inputed incorrectly change the class so the letter turns red
//
