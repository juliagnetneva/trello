function getDataTodo() {
  if (!localStorage.todo) {
    return [];
  }
  return JSON.parse(localStorage.getItem('todo'));
}
function getDataProgress() {
  if (!localStorage.progress) {
    return [];
  }
  return JSON.parse(localStorage.getItem('progress'));
}
function getDataDone() {
  if (!localStorage.done) {
    return [];
  }
  return JSON.parse(localStorage.getItem('done'));
}

const dataTodo = getDataTodo();
const dataProgress = getDataProgress();
const dataDone = getDataDone();
const data = [dataTodo, dataProgress, dataDone];

const setDataTodo = () => {
  localStorage.setItem('todo', JSON.stringify(dataTodo));
};
const setDataProgress = () => {
  localStorage.setItem('progress', JSON.stringify(dataProgress));
};
const setDataDone = () => {
  localStorage.setItem('done', JSON.stringify(dataDone));
};

export {
  dataTodo, dataProgress, dataDone, data,
  setDataTodo, setDataProgress, setDataDone,
};
