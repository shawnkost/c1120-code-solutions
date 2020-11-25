var $form = document.getElementById("contact-form");

function callback(event) {
  event.preventDefault();
  var obj = {};
  obj["name"] = $form.elements.name.value;
  obj["email"] = $form.elements.email.value;
  obj["message"] = $form.elements.message.value;
  $form.reset();
  console.log(obj);
}
$form.addEventListener("submit", callback);
