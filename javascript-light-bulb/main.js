var circle = document.querySelector(".circle");
var body = document.querySelector("body");
function lightBulb() {
  if (circle.className == "circle on") {
    circle.className = "circle off";
    body.className = "body-off";
  } else {
    circle.className = "circle on";
    body.className = "body-on"
  }
}
circle.addEventListener("click", lightBulb);
