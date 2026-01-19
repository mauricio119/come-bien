const meses = [
  "ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO",
  "JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"
];

function updateDate() {
  const now = new Date();
  document.querySelector("#day .display").textContent = now.getDate();
  document.querySelector("#month .display").textContent = meses[now.getMonth()];
}

updateDate();
setInterval(updateDate, 60000);
