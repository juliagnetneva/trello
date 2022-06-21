const date = new Date();
const hours = (date.getHours() < 10) ? `0${date.getHours()}` : date.getHours();
const minutes = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes();
const month = (date.getMonth() < 10) ? (`0${date.getMonth() + 1}`) : date.getMonth();
const dayDate = (date.getDate() < 10) ? (`0${date.getDate()}`) : date.getDate();
const timeElement = document.querySelector('#time');

function startClock() {
  setInterval(() => {
    timeElement.innerHTML = `${hours}:${minutes}`;
  }, 1000);
}

function buildDate(date) {
  return `${hours}:${minutes}  ${dayDate}.${month}.${date.getFullYear()}`;
}
export { startClock, buildDate };
