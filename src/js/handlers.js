import { $, $$ } from './helpers.js';
import {
  dataTodo, dataDone, dataProgress, data,
  setDataTodo, setDataProgress, setDataDone,
} from './storage.js';
import {
  render, updateLists, getCheckedPriority, sortArray,
} from './compositions.js';
import { Todo } from './classes.js';
import { getUsersEdit } from './users';

const formElement = $('#form-todo');
const modalElement = $('#modal-todo');
const titleModalElement = $('#title');
const textModalElement = $('#textarea');
const selectUserModalElement = $('#selectUser');
const radioElements = $$('input[name="priority"]');
const warningElement = $('#warning');
const confirmDeleteElement = $('#button-confirm-warning');

const formEditElement = $('#form-todo-edit');
const modalEditElement = $('#edit-todo');
const titleEditElement = $('#title-edit');
const textEditElement = $('#textarea-edit');
const selectUserEditElement = $('#selectUser-edit');
const confirmEditElement = $('#button-confirm-edit');
const radioEditElements = $$('input[name="priority-edit"]');

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
  warningElement.classList.add('active');
  confirmDeleteElement.addEventListener('click', () => {
    const listDoneElement = $('#list-done');
    const counterDoneElement = $('#counter-done');
    dataDone.length = 0;
    render(listDoneElement, dataDone, counterDoneElement);
  });
}

function handleChangeFilter(event) {
  const sortTodoElement = document.querySelector('#sort-todo');
  const sortProgressElement = document.querySelector('#sort-progress');
  const sortDoneElement = document.querySelector('#sort-done');
  const { value: valueSortTodo } = sortTodoElement;
  const { value: valueSortProgress } = sortProgressElement;
  const { value: valueSortDone } = sortDoneElement;

  if (event.target.id == 'sort-progress') {
    sortArray(valueSortProgress, dataProgress);
  }
  if (event.target.id == 'sort-todo') {
    sortArray(valueSortTodo, dataTodo);
  }
  if (event.target.id == 'sort-done') {
    sortArray(valueSortDone, dataDone);
  }
  updateLists();
}

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
          getUsersEdit(selectUserEditElement);
          const names = selectUserEditElement.getElementsByTagName('option');
          for (let i = 0; i < names.length; i++) {
            if (names[i].innerText === item.user) {
              names[i].selected = true;
            }
          }
          const el = radioEditElements.find((el) => el.value === item.priority);
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
            item.priority = getCheckedPriority(radioEditElements);
            updateLists();
            formEditElement.reset();
            modalEditElement.classList.remove('active');
          });
        }
      });
    });
  }
}

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
  handleChangeFilter,
};
