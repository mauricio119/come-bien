const dayNames = [
  "domingo","lunes","martes","miércoles","jueves","viernes","sábado"
];

const monthNames = [
  "enero","febrero","marzo","abril","mayo","junio",
  "julio","agosto","septiembre","octubre","noviembre","diciembre"
];

const flipDay = document.getElementById("flipDay");
const flipMonth = document.getElementById("flipMonth");

let currentDay = "";
let currentMonth = "";

function updateFlip(flip, newValue){
  const top = flip.querySelector(".top");
  const bottom = flip.querySelector(".bottom");
  const topFlip = flip.querySelector(".topFlip");
  const bottomFlip = flip.querySelector(".bottomFlip");

  if(top.textContent === newValue) return;

  topFlip.textContent = top.textContent;
  bottomFlip.textContent = newValue;

  flip.classList.add("animate");

  top.textContent = newValue;

  flip.addEventListener("animationend", () => {
    flip.classList.remove("animate");
    bottom.textContent = newValue;
  }, { once:true });
}

function tick(){
  const now = new Date();

  const day = now.getDate().toString().padStart(2,"0");
  const month = monthNames[now.getMonth()];

  if(day !== currentDay){
    updateFlip(flipDay, day);
    currentDay = day;
  }

  if(month !== currentMonth){
    updateFlip(flipMonth, month);
    currentMonth = month;
  }
}

tick();
setInterval(tick, 1000);
