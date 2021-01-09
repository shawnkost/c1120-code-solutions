const $taskList = document.querySelector(".task-list-container");

window.addEventListener("DOMContentLoaded", event => {
  loadTasks();
})

const loadTasks = () => {
  $taskList.innerHTML = "";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/api/notes");
  xhr.responseType = "json";
  xhr.addEventListener("load", data => {
    const ul = document.createElement("ul");
    for (const index of data.target.response) {
      const li = document.createElement("li");
      const taskContent = document.createElement("div");
      const deleteIcon = document.createElement("i");
      const editIcon = document.createElement("i");
      li.setAttribute("class", "border-bottom d-flex justify-content-center align-items-center");
      taskContent.setAttribute("class", "pr-5");
      taskContent.textContent = index.content;
      deleteIcon.setAttribute("class", "fas fa-ban pr-3 delete cursor-pointer");
      editIcon.setAttribute("class", "fas fa-pencil-alt edit cursor-pointer");
      li.appendChild(taskContent);
      li.appendChild(deleteIcon);
      li.appendChild(editIcon);
      ul.appendChild(li);
    }
    $taskList.appendChild(ul);
  });
  xhr.addEventListener('error', error => {
    console.log('Request Error:', error);
  });
  xhr.send();
}

const $inputField = document.querySelector("#task");

$inputField.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    createNewTask();
    $inputField.value = "";
  }
})

const createNewTask = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:3000/api/notes");
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.responseType = "json";
  xhr.addEventListener("load", data => {
    loadTasks();
  });
  xhr.addEventListener('error', error => {
    console.log('Request Error:', error);
  });
  xhr.send(JSON.stringify({content: `${$inputField.value}`}));
}

const $deleteBtn = document.querySelectorAll(".delete")
console.log($deleteBtn)

// $deleteBtn.addEventListener("click", () => {
//   deleteTask();
// })

const deleteTask = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("DELETE", "http://localhost:3000/api/notes");
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.responseType = "json";
  xhr.addEventListener("load", data => {
    loadTasks();
  });
  xhr.addEventListener("error", error => {
    console.log("Request Error:", error);
  });
  xhr.send(JSON.stringify())
}
