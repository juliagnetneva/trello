
import { $ } from './helpers';
import { templateTodo } from './templates';
import {
  dataDone, dataProgress, dataTodo, setDataDone, setDataProgress, setDataTodo,
} from './storage';


const listTodoElement = $('#list-todo');
const listProgressElement = $('#list-progress');
const listDoneElement = $('#list-done');
const counterTodoElement = $('#counter-todo')
const counterProgressElement = $('#counter-progress')
const counterDoneElement = $('#counter-done')


function clearList(list) {
  list.innerHTML = '';
}
function render(list, data, count) {
  const counter = data.length;
  clearList(list);
  let html = '';
  data.forEach((item) => {
    html += templateTodo(item);
  });
  count.innerText = counter;
  list.innerHTML = html;
}

function renderLists() {
  render(listTodoElement, dataTodo, counterTodoElement);
  render(listProgressElement, dataProgress, counterProgressElement);
  render(listDoneElement, dataDone, counterDoneElement);
}

const updateListTodo = () => {
  setDataTodo();
  render(listTodoElement, dataTodo, counterTodoElement);
};
const updateListProgress = () => {
  setDataProgress();
  render(listProgressElement, dataProgress, counterProgressElement);
};
const updateListDone = () => {
  setDataDone();
  render(listDoneElement, dataDone, counterDoneElement);
};
function updateLists() {
  updateListTodo();
  updateListProgress();
  updateListDone();
}

function getCheckedPriority(inputs) {
  for (const input of inputs) {
    if (input.checked) {
      return input.value
    }
  }
  return 'not checked'
}

export {
  render, renderLists, updateLists, getCheckedPriority};
