function handleClick(event) {
  console.log("button clicked");
  console.log(event);
  console.log(event.target);
 }
var button1 = document.querySelector(".click-button");
button1.addEventListener("click", handleClick, false);


function handleMouseover(event) {
  console.log("button hovered");
  console.log(event);
  console.log(event.target);
}
var button2 = document.querySelector(".hover-button");
button2.addEventListener("mouseover", handleMouseover, false);


function handleDoubleClick(event) {
  console.log("button double-clicked");
  console.log(event);
  console.log(event.target);
}
var button3 = document.querySelector(".double-click-button");
button3.addEventListener("dblclick", handleDoubleClick, false)
