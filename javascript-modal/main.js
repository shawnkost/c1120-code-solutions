var button = document.querySelector(".button1");

var modalcon = document.querySelector(".modal-container");

var modalButton = document.querySelector(".button2");

function modal() {
  modalcon.classList.toggle("show-modal");
}

button.addEventListener("click", modal);
modalButton.addEventListener("click", modal);
