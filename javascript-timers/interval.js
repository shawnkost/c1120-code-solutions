var $h1 = document.querySelector("h1");

var i = 3;

function updateText() {
  $h1.textContent = i;
  if (i == 0) {
    $h1.textContent = "~Earth Beeeelooowww Us~";
    clearInterval(intervalID);
  }
  i--;
}

var intervalID = setInterval(updateText, 1000)
