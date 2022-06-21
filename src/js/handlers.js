import { $, $$ } from './helpers.js';
import {
  dataTodo, dataDone, dataProgress, data,
  setDataTodo, setDataProgress, setDataDone,
} from './storage.js';
import {  render, updateLists, getCheckedPriority } from './compositions.js';
import { Todo } from './classes.js'
// __________modal new ______________
const formElement = $('#form-todo');
const modalElement = $('#modal-todo');
const titleModalElement = $('#title');
const textModalElement = $('#textarea');
const selectUserModalElement = $('#selectUser');
const radioElements = $$('input[name="priority"]')

// ___________edit_________________________
const formEditElement = $('#form-todo-edit');
const modalEditElement = $('#edit-todo');
const titleEditElement = $('#title-edit');
const textEditElement = $('#textarea-edit');
const selectUserEditElement = $('#selectUser-edit');
const confirmEditElement = $('#button-confirm-edit');
const radioEditElements = $$('input[name="priority-edit"]')

function handleBeforeUnload() {
  setDataTodo();
  setDataProgress();
  setDataDone();
}

function handleAddNewTodo(event) {
  if (event.target.id !== 'buttonAddTodo') {
    return;
  }
  event.preventDefault();
  modalElement.classList.add('active');
}

function handleDeleteAllTodo(event) {
  if (event.target.id !== 'buttonDeleteAll') {
    return;
  }
  // добавить модальное окно Уверенны, что хотите всё удалить?___________
  // confirm('уверенны что хотите удалить?');
  const listDoneElement = $('#list-done');
  dataDone.length = 0;
  render(listDoneElement, dataDone);
}

// ________________________________modal open ____________________________
function handleFocusTitleModal() {
  return titleModalElement.value = '';
}

function handleCancelModal(event) {
  if (event.target.id !== 'button-cancel-modal') {
    return;
  }
  formElement.reset();
  modalElement.classList.remove('active');
}

function handleSubmitForm(event) {
  if (event.target.id != 'button-confirm-modal') {
    return;
  }
  event.preventDefault();
  const { currentTarget: formElement } = event;
  const title = titleModalElement.value;
  const content = textModalElement.value;
  const user = selectUserModalElement.value;
  const priority = getCheckedPriority(radioElements);
  dataTodo.push(new Todo(title, content, user, priority));
  formElement.reset();
  updateLists();
  modalElement.classList.remove('active');
}


// _________________________________todo-item_____________________________
function handleClickDeleteTodo(event) {
  const { target } = event;
  const { action } = target.dataset;
  if (action == 'delete') {
    const todoElement = target.closest('.item');
    const { id } = todoElement;
    data.forEach((dataItem) => {
      dataItem.forEach((item, index) => {
        if (item.id == id) {
          dataItem.splice(index, 1);
          updateLists();
        }
      });
    });
  }
}
// ____________________________edit ______________________
function handleClickEditTodo(event) {
  const { target } = event;
  const { action } = target.dataset;
  if (action == 'edit') {
    const todoElement = target.closest('.item');
    const { id } = todoElement;
    data.forEach((dataItem) => {
      dataItem.forEach((item) => {
        if (item.id == id) {
          titleEditElement.value = item.title;
          textEditElement.value = item.text;
          selectUserEditElement.value = item.user;
          const el = radioEditElements.find(el => el.value === item.priority)
          if (el) el.checked = true;
          modalEditElement.classList.add('active');
          event.preventDefault();
          confirmEditElement.addEventListener('click', (event) => {
              if (event.target.id !== 'button-confirm-edit') {
                return;
              }
              item.title = titleEditElement.value;
              item.text = textEditElement.value;
              item.user = selectUserEditElement.value;
              item.priority = getCheckedPriority(radioEditElements)
              updateLists();
              formEditElement.reset();
              modalEditElement.classList.remove('active');
            },
          );
        }
      });
    });
  }
}

// _______________select status and remove to another list______________________
function handleChangeSelectOption(event) {
  const { target } = event;
  const { action } = target.dataset;
  if (action !== 'select') {
    return;
  }
  const selectedOption = target.value;
  const todoElement = target.closest('.item');
  const { id } = todoElement;
  data.forEach((dataItem) => {
    dataItem.forEach((item, index) => {
      if (item.id == id) {
        if (selectedOption == 'todo') {
          item.selected = selectedOption;
          dataItem.splice(index, 1);
          dataTodo.push(item);
          updateLists();
        }
        if (selectedOption == 'done') {
          item.selected = selectedOption;
          dataItem.splice(index, 1);
          dataDone.push(item);
          updateLists();
        }
        if (selectedOption == 'progress') {
          item.selected = selectedOption;
          dataItem.splice(index, 1);
          dataProgress.push(item);
          updateLists();
        }
      }
    });
  });
}

export {
  handleSubmitForm,
  handleDeleteAllTodo,
  handleClickDeleteTodo,
  handleCancelModal,
  handleAddNewTodo,
  handleBeforeUnload,
  handleClickEditTodo,
  handleFocusTitleModal,
  handleChangeSelectOption,
};
