const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const mins = document.querySelector("#mins");
const seconds = document.querySelector("#seconds");

const timeLeft = "17 Dec 2022";

function countdown() {
  const date = new Date(timeLeft);
  const currentDate = new Date();

  const totalSeconds = (date - currentDate)/1000;

  const countDays = Math.floor(totalSeconds / 3600 / 24);
  const countHours = Math.floor(totalSeconds / 3600 % 24);
  const countmins = Math.floor(totalSeconds / 60 % 60);
  const countSeconds = Math.floor(totalSeconds % 60);



  days.innerHTML = countDays;
  hours.innerHTML = formatTime(countHours);
  mins.innerHTML = formatTime(countmins);
  seconds.innerHTML = formatTime(countSeconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);