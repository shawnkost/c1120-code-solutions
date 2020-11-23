var number = 0;
var button1 = document.querySelector(".hot-button");
var click = document.querySelector(".click-count");
function buttonClick(event) {
  number++;
  document.querySelector(".click-count").textContent = "Clicks: " + number;
  if (number < 4) {
    button1.className = "hot-button cold";
  } else if (number < 7) {
    button1.className = "hot-button cool";
  } else if (number < 10) {
    button1.className = "hot-button tepid";
  } else if (number < 13) {
    button1.className = "hot-button warm";
  } else if (number < 16) {
    button1.className = "hot-button hot";
  } else if (number > 16) {
    button1.className = "hot-button nuclear";
  }
}
button1.addEventListener("click", buttonClick);
