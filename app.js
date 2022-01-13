function menu() {
  var menuE = document.getElementById("enlaces").attributes.item("class").value;
  if (menuE == "menuC") {
    document.getElementById("enlaces").attributes.item("display").value = "menuA";
  } else if (menuE == "menuA") {
    document.getElementById("enlaces").attributes.item("display").value = "menuC";
  }
  return 0;
}

function formulario() {
    location.assign("./form.html");
    return 0;
}
