import {$} from "./helpers";
import {templateTodo} from "./templates";
import {dataDone, dataProgress, dataTodo, setDataDone, setDataProgress, setDataTodo} from "./storage";

const listTodoElement = $('#list-todo');
const listProgressElement = $('#list-progress');
const listDoneElement = $('#list-done');

function clearList (list) {
  list.innerHTML = '';
}
function render (list, data) {
  clearList(list);
  let html = '';
  data.forEach(item => {
    html += templateTodo(item);
  })
  list.innerHTML = html;
}
const updateListTodo = () => {
  setDataTodo();
  render(listTodoElement, dataTodo);
}
const updateListProgress = () => {
  setDataProgress();
  render(listProgressElement, dataProgress);
}
const updateListDone = () => {
  setDataDone();
  render(listDoneElement, dataDone);
}
function updateLists () {
  updateListTodo();
  updateListProgress();
  updateListDone()
}
export { render, updateLists }
