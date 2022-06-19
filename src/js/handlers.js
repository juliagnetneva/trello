import { $, $$ } from './helpers.js';
import {dataTodo, dataProgress, dataDone, setDataTodo, setDataProgress, setDataDone,} from './storage.js';
import { Todo, render, updateLists} from "./compositions.js";

const modalElement = $('#modal-todo');
const titleTodoElement = $('#title');
const contentTodoElement = $('#textarea');
const selectUserElement = $('#selectUser');
const selectStatusElement = $('#select-status');
const mainElement = $('.main');
const listTodoElement = $('#list-todo');
const listProgressElement = $('#list-progress');
const listDoneElement = $('#list-done');

function handleAddNewTodo(event){
  event.preventDefault();
  modalElement.classList.add('active');
}

function handleCancelModal(){
  modalElement.classList.remove('active');
}

function handleDeleteAllTodo(){
  const listDoneElement = $('#list-done');
  dataDone.length = 0;
  render(listDoneElement, dataDone);
}

function handleClickDeleteTodo(event) {
  const target = event.target;
  const action = target.dataset.action;
  if (action == 'delete') {
    const todoElement = target.closest('.item');
    const id = todoElement.id;
    dataTodo.forEach((item, index) => {
      if (item.id == id) {
        dataTodo.splice(index, 1)
        render(listTodoElement, dataTodo)
      }
    });
    dataProgress.forEach((item, index) => {
      if (item.id == id) {
        dataProgress.splice(index, 1)
        render(listProgressElement, dataProgress)
      }
    });
    dataDone.forEach((item, index) => {
      if (item.id == id) {
        dataDone.splice(index, 1)
        render(listProgressElement, dataDone)
      }
    });
  }
}

function handleClickEditTodo(event) {
  const { target } = event;
  const action = target.dataset.action;
  console.log(action)
  if (action == 'edit') {
    const todoElement = target.closest('.item');
    const id = todoElement.id;
    console.log(id)
    event.preventDefault();
    modalElement.classList.add('active');

  }
}
//____________________________________________________________________________
function handleSubmitForm(event) {
  event.preventDefault();
  const { currentTarget: formElement } = event
  if(event.target.id != 'button-confirm-modal') {
    return
  }
  const title = titleTodoElement.value;
  const content = contentTodoElement.value;
  const user = selectUserElement.value;

  dataTodo.push(new Todo(title, content, user));
  updateLists();
  formElement.reset();
  modalElement.classList.remove('active');
}

function handleBeforeUnload () {
  setDataTodo();
  setDataProgress();
  setDataDone();
}

export {
  handleSubmitForm,
  handleDeleteAllTodo,
  handleClickDeleteTodo,
  handleCancelModal,
  handleAddNewTodo,
  handleBeforeUnload,
  handleClickEditTodo
}
