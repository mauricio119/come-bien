/*const meses = [
  "ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO",
  "JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"
];
*/
const meses = [
  "ENE","FEB","MAR","ABR","MAY","JUN",
  "JUL","AGO","SEP","OCT","NOV","DIC"
];

function updateDate() {
  const now = new Date();

  document.querySelector("#day .display").textContent =
    String(now.getDate()).padStart(2, "0");

  document.querySelector("#month .display").textContent =
    meses[now.getMonth()];
}


updateDate();
setInterval(updateDate, 60000);
