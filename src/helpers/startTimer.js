import { changeWinTime } from "../components/board";

function getTime(timeTmp) {
  let sec = timeTmp % 60;
  if (sec < 10) sec = `0${sec}`;
  let min = (timeTmp - sec) / 60;
  if (min < 10) min = `0${min}`;
  return `${min}:${sec}`;
}

let TIMER;
let time = 0;

export function startTimer() {
  time = 0;
  clearInterval(TIMER);
  const timerCountdown = document.querySelector(".timerCountdown");
  TIMER = setInterval(() => {
    time += 1;
    timerCountdown.innerHTML = `time: ${getTime(time)}`;
  }, 1000);
}

export function stopTimer() {
  clearInterval(TIMER);
  changeWinTime(time);
}
