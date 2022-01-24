var tarotista = "Krystel";
var fechaUsuarioHoy = new Date();
var fechaTarotHoy = new Date ();
var lunes = new Date();
var domingo = new Date();
var sigLunes = new Date();
var sigDomingo = new Date();
var semana = 0;
var diferenciaHoraMinutos = fechaUsuarioHoy.getTimezoneOffset();
var diferenciaHoras = diferenciaHoraMinutos / 60;
var hInicio = 16 - diferenciaHoras;
var hFin = 20 - diferenciaHoras;
var hoyAnio;
var hoyMes;
var hoyDiaMes;
var hoySemana;
var calendario;
var eventos;
var libro;
var hoja;
var rango;
var cHabil = navigator.cookieEnabled;
var cookies = document.cookie;
var cookieSemana;
var cookieServicio;

function ajustarCasillasCitas() {
  return 0;
}

function ajustarDiferenciaHoraria() {
  fechaTarotHoy.setFullYear(fechaUsuarioHoy.getFullYear(), fechaUsuarioHoy.getMonth(), fechaUsuarioHoy.getDate());
  fechaTarotHoy.setHours(fechaUsuarioHoy.getHours() + diferenciaHoras);
  fechaTarotHoy.setMinutes(fechaUsuarioHoy.getMinutes());
  fechaTarotHoy.setSeconds(fechaUsuarioHoy.getSeconds());
  fechaTarotHoy.setMilliseconds(fechaUsuarioHoy.getMilliseconds());
  hoyAnio = fechaTarotHoy.getFullYear();
  hoyMes = fechaTarotHoy.getMonth();
  hoyDiaMes = fechaTarotHoy.getDate();
  hoySemana = fechaTarotHoy.getDay();
}

function ajustarHorasIntervalos() {
  var minIni = "";
  var minFin = "";
  var hI;
  var hF;
  for (var i = 1; i < 17; i++) {
    var d = i / 4;
    var r = i % 4;
    if (r == 0) {
      minIni = "45";
      minFin = "00";
    }
    else if (r == 1) {
      minIni = "00";
      minFin = "15";
    }
    else if (r == 2) {
      minIni = "15";
      minFin = "30";
    }
    else if (r == 3) {
      minIni = "30";
      minFin = "45";
    }
    else {
      console.log("Error en el cálculo de minutos del formulario.");
    }
    if (d < 1) {
      hI = hInicio;
      hF = hInicio;
    }
    else if (d == 1) {
      hI = hInicio;
      hF = hInicio + 1;
    }
    else if (1 < d && d < 2) {
      hI = hInicio + 1;
      hF = hInicio + 1;
    }
    else if (d == 2) {
      hI = hInicio + 1;
      hF = hInicio + 2;
    }
    else if (2 < d && d < 3) {
      hI = hInicio + 2;
      hF = hInicio + 2;
    }
    else if (d == 3) {
      hI = hInicio + 2;
      hF = hInicio + 3;
    }
    else if (3 < d && d < 4) {
      hI = hInicio + 3;
      hF = hInicio + 3;
    }
    else if (d == 4) {
      hI = hInicio + 3;
      hF = hInicio + 4;
    }
    else {
      console.log("Error en el cálculo de horas del formulario.");
    }
    rango = "hora-" + i;
    document.getElementById(rango).innerHTML = hI + ":" + minIni + " - " + hF + ":" + minFin;
  }
}

function ajustarSemanaInicial() {
  if (hoySemana == 0) {
    lunes = new Date(fechaTarotHoy.getFullYear(), fechaTarotHoy.getMonth(), fechaTarotHoy.getDate() + 1);
    domingo = new Date(fechaTarotHoy.getFullYear(), fechaTarotHoy.getMonth(), fechaTarotHoy.getDate() + 7);
  } else if (hoySemana == 1) {
    lunes = new Date(fechaTarotHoy.getFullYear(), fechaTarotHoy.getMonth(), fechaTarotHoy.getDate());
    domingo = new Date(fechaTarotHoy.getFullYear(), fechaTarotHoy.getMonth(), fechaTarotHoy.getDate() + 6);
  } else if (hoySemana == 2) {
    lunes = new Date(fechaTarotHoy.getFullYear(), fechaTarotHoy.getMonth(), fechaTarotHoy.getDate() - 1);
    domingo = new Date(fechaTarotHoy.getFullYear(), fechaTarotHoy.getMonth(), fechaTarotHoy.getDate() + 5);
  } else if (hoySemana == 3) {
    lunes = new Date(fechaTarotHoy.getFullYear(), fechaTarotHoy.getMonth(), fechaTarotHoy.getDate() - 2);
    domingo = new Date(fechaTarotHoy.getFullYear(), fechaTarotHoy.getMonth(), fechaTarotHoy.getDate() + 4);
  } else if (hoySemana == 4) {
    lunes = new Date(fechaTarotHoy.getFullYear(), fechaTarotHoy.getMonth(), fechaTarotHoy.getDate() - 3);
    domingo = new Date(fechaTarotHoy.getFullYear(), fechaTarotHoy.getMonth(), fechaTarotHoy.getDate() + 3);
  } else if (hoySemana == 5) {
    lunes = new Date(fechaTarotHoy.getFullYear(), fechaTarotHoy.getMonth(), fechaTarotHoy.getDate() - 4);
    domingo = new Date(fechaTarotHoy.getFullYear(), fechaTarotHoy.getMonth(), fechaTarotHoy.getDate() + 2);
  } else if (hoySemana == 6) {
    lunes = new Date(fechaTarotHoy.getFullYear(), fechaTarotHoy.getMonth(), fechaTarotHoy.getDate() - 5);
    domingo = new Date(fechaTarotHoy.getFullYear(), fechaTarotHoy.getMonth(), fechaTarotHoy.getDate() + 1);
  } else {
    console.log('Error en el ajuste de dias, al cargar la semana actual.');
  }
  document.getElementById("semana").innerHTML = (lunes.getDate() + "/" + lunes.getMonth() + 1 + "/" + lunes.getFullYear() + " - " + domingo.getDate() + "/" + domingo.getMonth() + 1 + "/" + domingo.getFullYear());
}

function cargarFormulario() {
  cookieEditar("semana", semana);
  ajustarDiferenciaHoraria();
  ajustarHorasIntervalos();
  ajustarSemanaInicial();
  ajustarCasillasCitas();
  return 0;
}

function cookieComprobarExiste() {
}

function cookieComprobarHabilitado() {
  if (cHabil == true) {
  } else if (cHabil == false) {
    alert('Tiene deshabilitado el uso de "cookies"; las cuales necesitamos, para el correcto funcionamiento, de algunas funciones de esta página. Sin acceso al uso de "cookies", solo podemos mostrarle, la semana actual; excepto si hoy es domingo, en cuyo caso verá, la semana siguiente.');
  } else {
  }
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
}

function cookieEliminar() {
  return 0;
}

function cookieLeer() {
  return 0;
}

function decodificarRespuesta(respuesta) {
  console.log("La respuesta es: " + respuesta);
}

function enviarForm() {
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
  } else {
    document.getElementById("enlaces").attributes.item("display").value = "menuC";
  }
  return 0;
}

function quitarHoyYAnteriores() {
}

function semanaActual() {
  var solicitud = new XMLHttpRequest();
  solicitud.onload = function() {
    decodificarRespuesta(this.responseText);
  }
  solicitud.open("GET", "./README.md");
  solicitud.send();
}

function semanaAnterior() {
  return 0;
}

function semanaSiguiente() {
  return 0;
}
