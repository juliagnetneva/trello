import { $, $$ } from './helpers.js';
import {dataTodo, dataProgress, dataDone, setDataTodo, setDataProgress, setDataDone,} from './storage.js';
import { Todo, render, updateLists} from "./compositions.js";

const modalElement = $('#modal-todo');
const titleTodoElement = $('#title');
const contentTodoElement = $('#textarea');
const selectUserElement = $('#selectUser');
const selectStatusElement = $('#select-status');


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

function handleDeleteTodo() {
  // написать удаление todo
}

function handleEditTodo() {
  // открыть модальное окно с данными из todo
}

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


export {
  handleSubmitForm,
  handleEditTodo,
  handleDeleteAllTodo,
  handleDeleteTodo,
  handleCancelModal,
  handleAddNewTodo,

}
