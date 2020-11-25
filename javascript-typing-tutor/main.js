var $span = document.querySelectorAll("span");
var $text = document.querySelector("h1");
var $body = document.querySelector("body");
var $button = document.querySelector("button");
var i = 0;
var errors = 0;
$span[i].className = "active";
$body.addEventListener("keydown", characterPress);
function characterPress(event) {
  $span[i].className = "active";
  if ($span[i].textContent !== event.key) {
    $span[i].className = "red active";
    errors++;
  } else {
    $span[i].className = "green";
    i++;
    $span[i].className = "active";
  }
  if (i === $span.length -1 && $span[i].className == "active") {
    var total = errors + 30;
    var accuracy = (30 / total) * 100 ;
    accuracy = accuracy.toFixed(2);
    $text.textContent = "Your accuracy is" + " " + accuracy + "%";
    $button.className = "show";
  }
}

function resetPage(click) {
  location.reload();
}

$button.addEventListener("click", resetPage);
