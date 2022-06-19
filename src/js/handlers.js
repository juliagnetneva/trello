import { $, $$ } from './helpers.js';
import {dataTodo, dataDone, data, setDataTodo, setDataProgress, setDataDone,} from './storage.js';
import { Todo, render, updateLists} from './compositions.js';

//__________modal new ______________
const formElement = $('#form-todo');
const modalElement = $('#modal-todo');
const titleModalElement = $('#title');
const textModalElement = $('#textarea');
const selectUserModalElement = $('#selectUser');

//___________edit_________________________
const formEditElement = $('#form-todo-edit');
const modalEditElement = $('#edit-todo');
const titleEditElement = $('#title-edit');
const textEditElement = $('#textarea-edit');
const selectUserEditElement = $('#selectUser-edit');
const confirmEditElement = $('#button-confirm-edit');


function handleBeforeUnload () {
  setDataTodo();
  setDataProgress();
  setDataDone();
}

function handleAddNewTodo(event){
  if(event.target.id != 'buttonAddTodo') {
    return
  }
  event.preventDefault();
  modalElement.classList.add('active');
}

function handleDeleteAllTodo(event){
  if(event.target.id != 'buttonDeleteAll') {
    return
  }
  const listDoneElement = $('#list-done');
  dataDone.length = 0;
  render(listDoneElement, dataDone);
}

//________________________________modal open ____________________________
function handleCancelModal(event){
  if(event.target.id != 'button-cancel-modal') {
    return
  }
  formElement.reset();
  modalElement.classList.remove('active');
}

function handleSubmitForm(event) {
  if(event.target.id != 'button-confirm-modal') {
    return
  }
  event.preventDefault();
  const { currentTarget: formElement } = event
  const title = titleModalElement.value;
  const content = textModalElement.value;
  const user = selectUserModalElement.value;
  dataTodo.push(new Todo(title, content, user));
  formElement.reset();
  updateLists();
  modalElement.classList.remove('active');
}

function handleFocusTitleModal() {
  return titleModalElement.value = '';
}

//_________________________________todo-item_____________________________
function handleClickDeleteTodo(event) {
  const target = event.target;
  const action = target.dataset.action;
  if (action == 'delete') {
    const todoElement = target.closest('.item');
    const id = todoElement.id;
    data.forEach(dataItem => {
      dataItem.forEach((item, index) => {
        if (item.id == id) {
          dataItem.splice(index, 1)
          updateLists()
        }
      });
    })
  }
}
//____________________________edit ______________________
function handleClickEditTodo(event) {
  const {target} = event;
  const action = target.dataset.action;
  if (action == 'edit') {
    const todoElement = target.closest('.item');
    const id = todoElement.id;
    data.forEach(dataItem => {
      dataItem.forEach((item, index) => {
        if (item.id == id) {
          titleEditElement.value = item.title;
          textEditElement.value = item.text;
          selectUserEditElement.value = item.user;
          modalEditElement.classList.add('active');
          event.preventDefault();

          confirmEditElement.addEventListener('click', function handleSubmitEditForm(event) {
            if(event.target.id != 'button-confirm-edit') {
              return
            }
            item.title = titleEditElement.value;
            item.text = textEditElement.value;
            item.user = selectUserEditElement.value ;
            updateLists()
            formEditElement.reset();
            modalEditElement.classList.remove('active');
          });
        }
      });
    });
  }
}


//____________________________________________________________________________



export {
  handleSubmitForm,
  handleDeleteAllTodo,
  handleClickDeleteTodo,
  handleCancelModal,
  handleAddNewTodo,
  handleBeforeUnload,
  handleClickEditTodo,
  handleFocusTitleModal
}
