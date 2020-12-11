
var $pokemon = document.querySelector(".pokemon");
var $leftArrow = document.querySelector(".left-arrow");
var $rightArrow = document.querySelector(".right-arrow");
var $circle0 = document.querySelector(".circle0");
var $circle1 = document.querySelector(".circle1");
var $circle2 = document.querySelector(".circle2");
var $circle3 = document.querySelector(".circle3");
var $circle4 = document.querySelector(".circle4");
var i = 0;
var images = [];
var timeOutVar = null;
var clearInter1 = null;
var clearInter2 = null;
var firstTime = true;

images[0] = "images/1.png";
images[1] = "images/2.png";
images[2] = "images/3.png";
images[3] = "images/4.png";
images[4] = "images/5.png"


function changePhoto() {
  clearTimeout(timeOutVar);
  if (!firstTime) {
    if (i == 4) {
      i = 0;
    } else {
      i = i + 1;
    }
  }
  document.slide.src = images[i];
  firstTime = false;
  var $allCircles = document.querySelectorAll(".fa-circle")
  for (var k = 0; k < $allCircles.length; k++) {
    $allCircles[k].setAttribute("class", `far fa-circle circle${k}`);
  }
  var currentCircle = document.querySelector(`.circle${i}`)
  currentCircle.setAttribute("class", `fas fa-circle circle${i}`)
  timeOutVar = setTimeout(changePhoto, 3000)
}


window.addEventListener("load", changePhoto);


$rightArrow.addEventListener("click", function() {
  clearTimeout(timeOutVar);
  if (i == 4) {
    i = 0;
  } else {
    i = i + 1
  }
  firstTime = true;
  changePhoto();
})


$leftArrow.addEventListener("click", function() {
  clearTimeout(timeOutVar);
  if (i == 0) {
    i = 4;
  } else {
    i = i - 1
  }
  firstTime = true;
  changePhoto();
})

$circle0.addEventListener("click", function() {
  clearTimeout(timeOutVar);
  i = 0;
  document.slide.src = images[i];
  firstTime = true;
  changePhoto();
})

$circle1.addEventListener("click", function() {
  clearTimeout(timeOutVar);
  i = 1;
  document.slide.src = images[i];
  firstTime = true;
  changePhoto();
})

$circle2.addEventListener("click", function() {
  clearTimeout(timeOutVar);
  i = 2;
  document.slide.src = images[i];
  firstTime = true;
  changePhoto();
})

$circle3.addEventListener("click", function() {
  clearTimeout(timeOutVar);
  i = 3;
  document.slide.src = images[i];
  firstTime = true;
  changePhoto();
})

$circle4.addEventListener("click", function() {
  clearTimeout(timeOutVar);
  i = 4;
  document.slide.src = images[i];
  firstTime = true;
  changePhoto();
})
