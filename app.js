/* ÍNDICE:
   =======
- Variables de tarotistas.
- Variables de fecha y hora.
- Variables de calendario.
- Variables de hoja de cálculo.
- Variables de cookies y almacenamiento.
- ajustarHoras(): Función para ajustar los intervalos del formulario, a la franja horaria del usuario.
- ajustarSemanaIni(): Función para ajustar, la ubicación del día de hoy, dentro de la semana inicial; y en caso de ser domingo, mostrar la semana siguiente.
- calcularDiferencia(): Función para calcular la diferencia horaria, entre el servidor y el usuario.
- cargarFormulario(): Función inicial, tras cargar la página de formulario, de comprobaciones y ajustes iniciales.
- cookieComprobarHabilitado(): Comprobar si están habilitadas las cookies, en el navegador del usuario; y en caso contrario, mandar un aviso.
- cookieEditar(): Crear y editar cookies.
- cookieLeer(): Función para comprobar, si existe una cookie; y en caso afirmativo, leer su valor.
- irAFormulario(): Función del botón "Reservar Cita", para ir a la página de formulario.
- menu(): Función para abrir y cerrar el menú de navegación, en la versión móvil.
*/

// Variables de tarotistas:
var tarotista = "Krystel";

// Variables de fecha y hora:
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

// Variables de calendario:
var calendario;
var eventos;

// Variables de hoja de cálculo:
var libro;
var hoja;
var rango;

// Variables de cookies y almacenamiento:
var cHabil = navigator.cookieEnabled;
var cookies = document.cookie;
var cookieSemana;

// Función para ajustar en el formulario, las casillas de selección, en función de la semana a visualizar y la fecha actual:
function ajustarCasillas() {
}

// Función para ajustar los intervalos del formulario, a la franja horaria del usuario:
function ajustarHoras() {
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
    } else if (r == 1) {
      minIni = "00";
      minFin = "15";
    } else if (r == 2) {
      minIni = "15";
      minFin = "30";
    } else if (r == 3) {
      minIni = "30";
      minFin = "45";
    } else {
      console.log("Error en el cálculo de minutos del formulario.");
    }
    if (d < 1) {
      hI = hInicio;
      hF = hInicio;
    } else if (d == 1) {
      hI = hInicio;
      hF = hInicio + 1;
    } else if (1 < d && d < 2) {
      hI = hInicio + 1;
      hF = hInicio + 1;
    } else if (d == 2) {
      hI = hInicio + 1;
      hF = hInicio + 2;
    } else if (2 < d && d < 3) {
      hI = hInicio + 2;
      hF = hInicio + 2;
    } else if (d == 3) {
      hI = hInicio + 2;
      hF = hInicio + 3;
    } else if (3 < d && d < 4) {
      hI = hInicio + 3;
      hF = hInicio + 3;
    } else if (d == 4) {
      hI = hInicio + 3;
      hF = hInicio + 4;
    } else {
      console.log("Error en el cálculo de horas del formulario.");
    }
    var rango = "hora" + i;
    document.getElementsyClassName(rango).outerText(hI + ":" + minIni + "-" + hF + ":" + minFin);
  }
}

// Función para ajustar, la ubicación del día de "hoy", dentro de la semana inicial; y en caso de ser domingo, mostrar la semana siguiente:
function ajustarSemanaIni() {
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
}

// Función para calcular la diferencia horaria, entre el servidor y el usuario:
function calcularDiferencia() {
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

// Función para leer en el calendario, los intervalos disponibles y ocupados, de la semana a visualizar.
function calendarioLeerDisponible() {
}

// Función inicial, al cargar la página de formulario:
function cargarFormulario() {
  if (cHabil == true) { // En caso de estar habilitado el uso de cookies, iniciar una, para registrar la semana que se visualiza.
    var servicio = cookieLeer("servicio");
    console.log(servicio);
    if (servicio == "suenos") { // Si se ha guardado la cookie correspondiente, marcar la opción asociada al enlace, desde el que se llamó al formulario.
      document.getElementById("Sueno").setAttribute("checked");
    } else if (servicio == "tarot") {
      document.getElementById("Tarot").setAttribute("checked");
    }
    cookieEditar("semana", "0", "2", "");
  }
  calcularDiferencia(); // Calcular la diferencia horaria, respecto al usuario.
  ajustarHoras(); // Ajustar los horarios de atención, a la franja horaria del usuario.
  ajustarSemanaIni(); // Ajustar los días de la semana inicial, dependiendo de la fecha actual.
  calendarioLeerDisponible(); // Lleer en el calendario, los intervalos disponibles y ocupados, de la semana a visualizar; si es la actual, a partir de "mañana".
  ajustarCasillas(); // Ajustar en el formulario, las casillas de selección de la semana inicial, en función de la fecha actual.
  return 0;
}

// Función para comprobar si están habilitadas las cookies, en el navegador del usuario:
function cookieComprobarHabilitado() {
  if (cHabil == true) {
    return 0;
  } else {
    alert('Tiene deshabilitado el uso de "cookies"; las cuales necesitamos, para el correcto funcionamiento, de algunas funciones de esta página. Sin acceso al uso de "cookies", solo podemos mostrarle, la semana actual; excepto si hoy es domingo, en cuyo caso verá, la semana siguiente.');
  }
  return 0;
}

// Función para crear y editar cookies:
function cookieEditar(cNombre, cValor, cCaduca, cRuta) {
  if (cNombre == "" || cNombre == "null") {
    console.log("Nombre de cookie no definido.");
  } else if (cValor == "" || cValor == "null") {
    console.log("Valor de cookie no definido.");
  } else if (cCaduca == "" && cRuta == "") {
    galleta = '"' + cNombre + '=' + cValor + '"';
    document.cookie = encodeURIComponent(galleta);
  } else if (cCaduca == "" && cRuta != "") {
    galleta = '"' + cNombre + '=' + cValor + '; expires=' + '' + '; path=/' + cRuta + '"';
    document.cookie = encodeURIComponent(galleta);
  } else {
    var caduca = new Date();
    caduca.setTime(getTime() + (cCaduca * 60 * 60 * 1000));
    cCaduca = caduca.toUTCString();
    if (cCaduca != "" && cRuta == "") {
      galleta = '"' + cNombre + '=' + cValor + '; expires=' + cCaduca + '"';
      document.cookie = encodeURIComponent(galleta);
    } else {
      galleta = '"' + cNombre + '=' + cValor + '; expires=' + cCaduca + '; path=/' + cRuta + '"';
      document.cookie = encodeURIComponent(galleta);
    }
  }
  return 0;
}

// Función para comprobar, si existe una cookie; y en caso afirmativo, leer su valor:
function cookieLeer(nombreCookie) {
  var cookies = decodeURIComponent(document.cookie).split(';');
  for (var i = 0; i < cookies.length; i++) {
    var ck = cookies[i];
    while (ck.charAt(0) == ' ') {
      ck = ck.substring(1);
    }
    if (ck.indexOf(nombreCookie + '=') == 0) {
      return ck.substring(nombreCookie.length, ck.length);
    }
  }
  return "";
}

// Función del botón "Reservar Cita", para ir al formulario.
function irAFormulario(servicio) {
  cookieEditar("servicio", servicio, "2", "");
  location.assign("./form.html");
  return 0;
}

// Función para abrir y cerrar el menú de navegación, en la versión móvil:
function menu() {
  var menuE = document.getElementById("enlaces").attributes.item("class").value;
  if (menuE == "menuC") {
    document.getElementById("enlaces").attributes.item("display").value = "menuA";
  } else if (menuE == "menuA") {
    document.getElementById("enlaces").attributes.item("display").value = "menuC";
  }
  return 0;
}
