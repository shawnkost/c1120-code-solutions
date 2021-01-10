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
    const $ul = document.createElement("ul");
    for (const index of data.target.response) {
      const $li = document.createElement("li");
      const $input = document.createElement("input");
      const $deleteIcon = document.createElement("i");
      $li.setAttribute("class", "d-flex justify-content-center align-items-center");
      $li.setAttribute("id", `${index.id}`);
      $input.setAttribute("class", "border-bottom notes-input")
      $input.setAttribute("type", "text");
      $input.setAttribute("id", "notes");
      $input.setAttribute("name", "notes");
      $input.value = index.content;
      $deleteIcon.setAttribute("class", "fas fa-ban pr-3 delete cursor-pointer");
      $li.appendChild($input);
      $li.appendChild($deleteIcon);
      $ul.appendChild($li);
    }
    $taskList.appendChild($ul);
    const $deleteBtn = document.querySelectorAll(".delete")
    for (const i of $deleteBtn) {
      i.addEventListener("click", event => {
        deleteTask(event);
      });
    }
    const $notesInput = document.querySelectorAll(".notes-input");
    for (const l of $notesInput) {
      l.addEventListener("keyup", event => {
        editTask(event);
      })
    }
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

const $add = document.querySelector(".add");

$add.addEventListener("click", () => {
  createNewTask();
  $inputField.value = "";
})

const createNewTask = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:3000/api/notes");
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.responseType = "json";
  xhr.addEventListener("load", data => {
    loadTasks();
  });
  xhr.send(JSON.stringify({
    content: `${$inputField.value}`
  }));
}


const deleteTask = event => {
  const parentID = event.target.parentElement;
  const xhr = new XMLHttpRequest();
  xhr.open("DELETE", `http://localhost:3000/api/notes/${parentID.getAttribute("id")}`);
  xhr.responseType = "json";
  xhr.addEventListener("load", data => {
    parentID.remove()
  });
  xhr.send();
}


const editTask = event => {
  const updatedTask = event.target.value;
  const parentID = event.target.parentElement;
  const xhr = new XMLHttpRequest();
  xhr.open("PUT", `http://localhost:3000/api/notes/${parentID.getAttribute("id")}`);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.responseType = "json";
  xhr.addEventListener("load", data => {

  });
  xhr.send(JSON.stringify({
    content: `${updatedTask}`
  }));
}
