const urlApi = 'https://www.googleapis.com/calendar/v3';
const idCalendario = '3700b740e4fa27ac19f134c56f08a1f4ea82c5ef458a27be640fedb2463b2054@group.calendar.google.com';
const urlEventos = '/calendars/${idCalendario}';

fetch(urlApi + urlEventos)
  .then(objeto => JSON.stringify(objeto))
  .then(respuesta => document.getElementById("resp").innerText = respuesta)
  .catch(error => document.getElementById("resp").innerText = error)
