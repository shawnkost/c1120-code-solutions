var $header = document.querySelector("h1");

function updateText() {
  $header.textContent = "Hello There";
}

setTimeout(updateText, 2 * 1000);
