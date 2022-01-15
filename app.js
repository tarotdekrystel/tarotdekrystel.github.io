function cargarFormulario() {
  /* Comprobar si el navegador acepta cookies; en caso contrario, enviar un mensaje de notificación y opción de activarlas. */
  cookieComprobarHabilitado();
  /* Iniciar cookie, para guardar la semana mostrada. */
  cookieCrear("semana", "0", "", "");
  /* Calcular la diferencia horaria, respecto al usuario. */
  calcularDiferencia();
  /* Ajustar los horarios de atención, a la franja horaria del usuario. */
  ajustarHoras();
  /* Ajustar los días de la semana inicial, dependiendo de la fecha actual. */
  ajustarSemanaIni();
  /* Ajustar las casillas de selección, de la semana inicial, en función de la fecha actual. */
  ajustarCasillas();
  return 0;
}

function cookieComprobarHabilitado() {
  if (cHabil == true) {
    return 0;
  } else {
    alert('Tiene deshabilitado el uso de "cookies"; las cuales necesitamos, para el correcto funcionamiento, de algunas funciones de esta página. Sin acceso al uso de "cookies", solo podemos mostrarle, la semana actual; excepto si hoy es domingo, en cuyo caso verá, la semana siguiente.');
  }
  return 0;
}

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

function irAFormulario() {
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
