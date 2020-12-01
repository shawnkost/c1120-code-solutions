/* exported todos */

var todos = [];
var previousTodosJSON = localStorage.getItem("javascript-local-storage");
if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}

window.addEventListener("beforeunload", (event) => {
  todosJSON = JSON.stringify(todos);
  localStorage.setItem("javascript-local-storage", todosJSON);
})
