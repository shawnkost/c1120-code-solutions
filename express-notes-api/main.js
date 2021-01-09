const $taskList = document.querySelector(".task-list-container")
const $inputField = document.querySelector("#task");

const loadTasks = () => {
  // console.log("hello");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/api/notes");
  xhr.responseType = "json";
  xhr.addEventListener("load", data => {
    const ul = document.createElement("ul");
    for (const index of data.target.response) {
      // console.log(index.content);
      const li = document.createElement("li");
      const taskContent = document.createElement("div");
      const deleteIcon = document.createElement("i");
      const editIcon = document.createElement("i");
      li.setAttribute("class", "border-bottom d-flex justify-content-center align-items-center")
      taskContent.setAttribute("class", "pr-5")
      taskContent.textContent = index.content;
      deleteIcon.setAttribute("class", "fas fa-ban pr-3");
      editIcon.setAttribute("class", "fas fa-pencil-alt")
      li.appendChild(taskContent);
      li.appendChild(deleteIcon);
      li.appendChild(editIcon);
      ul.appendChild(li);
    }
    $taskList.appendChild(ul);
  })
  xhr.addEventListener('error', error => {
    console.log('Request Error:', error);
  });
  // console.log("input field:", $inputField);
  xhr.send()
}

$inputField.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    createNewTask()
  }
})

const createNewTask = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", `http://localhost:3000/api/notes`);
  xhr.responseType = "json";
  xhr.addEventListener("load", data => {})
  xhr.addEventListener('error', error => {
    console.log('Request Error:', error);
  });
  let test = {
    content: "yo"
  }
  xhr.send(JSON.stringify(test));
  loadTasks();
}


loadTasks();
