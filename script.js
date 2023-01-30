setInterval(setClock, 1000);
const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
  const currendDate = new Date();
  const secondsRatio = currendDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currendDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currendDate.getHours()) / 12;
  setrotation(secondHand, secondsRatio);
  setrotation(minuteHand, minutesRatio);
  setrotation(hourHand, hoursRatio);
}

function setrotation(element, rorationRation) {
  element.style.setProperty("--rotation", rorationRation * 360);
}

setClock();
