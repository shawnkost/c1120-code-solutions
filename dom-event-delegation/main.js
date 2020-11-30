function test(event) {
  console.log("event.target", event.target);
  console.log("event.target.tagName", event.target.tagName);
  if (event.target.tagName == "BUTTON") {
    var closest = event.target.closest(".task-list-item");
    console.log("event.target.closest", closest);
    closest.remove();
  }
}

var taskList = document.querySelector(".task-list");
taskList.addEventListener("click", test)
