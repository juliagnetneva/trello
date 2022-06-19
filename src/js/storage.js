let dataTodo = getDataTodo();
let dataProgress = getDataProgress();
let dataDone = getDataDone();
let data = [dataTodo, dataProgress, dataDone];

function getDataTodo() {
  if(!localStorage.todo) {
    return [];
  } else {
    return JSON.parse(localStorage.getItem('todo'));
  }
}
function getDataProgress() {
  if(!localStorage.progress) {
    return [];
  } else {
    return JSON.parse(localStorage.getItem('progress'));
  }
}
function getDataDone() {
  if(!localStorage.done) {
    return [];
  } else {
    return JSON.parse(localStorage.getItem('done'));
  }
}

const setDataTodo = () => {
  localStorage.setItem('todo', JSON.stringify(dataTodo));
}
const setDataProgress = () => {
  localStorage.setItem('progress', JSON.stringify(dataProgress));
}
const setDataDone = () => {
  localStorage.setItem('done', JSON.stringify(dataDone));
}

export {
  dataTodo, dataProgress, dataDone, data,
  setDataTodo, setDataProgress, setDataDone
}
