var $tabContainer = document.querySelector(".tab-container");
var $tabList = document.querySelectorAll(".tab");
var $viewList = document.querySelectorAll(".view");

$tabContainer.addEventListener("click", function (event) {
  if (event.target.matches(".tab")) {
    for (var i = 0; i < $tabList.length; i++) {
      if (event.target !== $tabList[i]) {
        $tabList[i].className = "tab";
      } else {
        $tabList[i].className = "tab active";
      }
      if (event.target.className == "tab") {
        var dataView = event.target.dataset.view;
        for (var k = 0; k < $viewList.length; k++) {
          if ($viewList[k].dataset.view !== dataView) {
            $viewList[k].className = "hidden";
          } else {
            $viewList[k].className = "view"
          }
        }
      }
    }

  }
})
