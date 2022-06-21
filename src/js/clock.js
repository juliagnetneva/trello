function startClock() {
  setInterval(() => {
    const date = new Date();
    const hours = (date.getHours() < 10) ? `0${date.getHours()}` : date.getHours();
    const minutes = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes();
    const timeElement = document.querySelector('#time');
    timeElement.innerHTML = `${hours}:${minutes}`;
  }, 1000);
}

function buildDate(date) {
  const month = (date.getMonth() < 10) ? (`0${date.getMonth() + 1}`) : date.getMonth();
  const dayDate = (date.getDate() < 10) ? (`0${date.getDate()}`) : date.getDate();
  return `${date.getHours()}:${date.getMinutes()}  ${dayDate}.${month}.${date.getFullYear()}`;
}
export { startClock, buildDate };
