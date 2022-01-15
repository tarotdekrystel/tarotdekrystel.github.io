function cookieEditar(cNombre, cValor, cCaduca, cRuta) {
  if (cNombre == "") {
    console.log("Nombre de cookie no definido.");
  } else if (cValor == "") {
    console.log("Valor de cookie no definido.");
  } else if (cCaduca == "" && cRuta == "") {
    document.cookie = '"' + cNombre + '=' + cValor + '"';
  } else if (cCaduca == "" && cRuta != "") {
    document.cookie = '"' + cNombre + '=' + cValor + '; expires=' + '' + '; path=/' + cRuta + '"';
  } else if (cCaduca != "" && cRuta == "") {
    document.cookie = '"' + cNombre + '=' + cValor + '; expires=' + cCaduca + '"';
  } else {
    document.cookie = '"' + cNombre + '=' + cValor + '; expires=' + cCaduca + '; path=/' + cRuta + '"';
  }
  return 0;
}

function formulario() {
    location.assign("./form.html");
    return 0;
}

function menu() {
  var menuE = document.getElementById("enlaces").attributes.item("class").value;
  if (menuE == "menuC") {
    document.getElementById("enlaces").attributes.item("display").value = "menuA";
  } else if (menuE == "menuA") {
    document.getElementById("enlaces").attributes.item("display").value = "menuC";
  }
  return 0;
}
