import { $, $$ } from './helpers.js';
import {dataTodo, dataProgress, dataDone, setDataTodo, setDataProgress, setDataDone,} from './storage.js';
import { Todo, templateTodo } from './templates.js';
import {render, updateLists} from "./compositions.js";

const modalElement = $('#modal-todo');

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
  // обновить локал updateLocal();
  // обновить все в html fillHtmlList();
}
function handleEditTodo() {
  // открыть модальное окно с данными из
}
function handleSubmitForm(event) {
  event.preventDefault();
  const { currentTarget: formElement } = event
  console.log(event.target)
  console.log(event.currentTarget)
  if(event.target.id != 'button-confirm-modal') {
    return
  }
  dataTodo.push(new Todo());
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
  handleAddNewTodo
}
