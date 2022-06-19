import {$} from "./helpers";
import {templateTodo} from "./templates";
import {dataDone, dataProgress, dataTodo, setDataDone, setDataProgress, setDataTodo} from "./storage";
import {buildDate} from "./clock";


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

function renderLists() {
  render(listTodoElement, dataTodo);
  render(listProgressElement, dataProgress);
  render(listDoneElement, dataDone);
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

class Todo {
  constructor(title, content, user) {
    this.title = title.trim() ? title : '';
    this.text = content.trim() ? content : '';
    this.id = new Date().getTime();
    this.createdAt = buildDate(new Date());
    this.user = user;
    this.status = '';
  }
}

export { render, renderLists, updateLists, Todo }
