// Variables de tarotistas
var tarotista = "Krystel";

// Variables de fecha y hora
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

// Variables de calendario
var calendario;
var eventos;

// Variables de hoja de cálculo.
var libro;
var hoja;
var rango;

// Variables de cookies y almacenamiento:
var cHabil = navigator.cookieEnabled;
var cookies = document.cookie;
var cookieSemana;

// Función inicial, al cargar la página de formulario:
function cargarFormulario() {
  /* Comprobar si el navegador acepta cookies; en caso contrario, enviar un mensaje de notificación y opción de activarlas. */
  cookieComprobarHabilitado();
  /* Iniciar cookie, para guardar la semana mostrada. */
  cookieEditar("semana", "0", "2", "");
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
  if (cNombre == "") {
    console.log("Nombre de cookie no definido.");
  } else if (cValor == "") {
    console.log("Valor de cookie no definido.");
  } else if (cCaduca == "" && cRuta == "") {
    document.cookie = '"' + cNombre + '=' + cValor + '"';
  } else if (cCaduca == "" && cRuta != "") {
    document.cookie = '"' + cNombre + '=' + cValor + '; expires=' + '' + '; path=/' + cRuta + '"';
  } else {
    var caduca = new Date();
    caduca.setTime(getTime() + (cCaduca * 60 * 60 * 1000));
    cCaduca = caduca.toUTCString();
    if (cCaduca != "" && cRuta == "") {
      document.cookie = '"' + cNombre + '=' + cValor + '; expires=' + cCaduca + '"';
    } else {
      document.cookie = '"' + cNombre + '=' + cValor + '; expires=' + cCaduca + '; path=/' + cRuta + '"';
    }
  }
  return 0;
}

// Función del botón "Reservar Cita", para ir al formulario.
function irAFormulario() {
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
