function getTime(timeTmp) {
  let sec = timeTmp % 60;
  if (sec < 10) sec = `0${sec}`;
  let min = (timeTmp - sec) / 60;
  if (min < 10) min = `0${min}`;
  return `${min}:${sec}`;
}

let TIMER;

export default function startTimer() {
  let time = 0;
  clearInterval(TIMER);
  const timerCountdown = document.querySelector(".timerCountdown");
  TIMER = setInterval(() => {
    time += 1;
    timerCountdown.innerHTML = `Timer: ${getTime(time)}`;
  }, 1000);
}
