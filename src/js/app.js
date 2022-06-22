import { $ } from './helpers.js';
import { getUsers } from './users.js';
import { startClock } from './clock.js';
import { renderLists } from './compositions';
import {
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
} from './handlers.js';

const selectUserModalElement = $('#selectUser');
getUsers(selectUserModalElement);

startClock();

const mainElement = $('.main');
const formElement = $('#form-todo');
const titleModalElement = $('#title');

renderLists();

window.addEventListener('beforeunload', handleBeforeUnload);
mainElement.addEventListener('click', handleAddNewTodo);
mainElement.addEventListener('change', handleChangeFilter);
mainElement.addEventListener('change', handleChangeSelectOption);
mainElement.addEventListener('click', handleClickDeleteTodo);
mainElement.addEventListener('click', handleClickEditTodo);
mainElement.addEventListener('click', handleDeleteAllTodo);
formElement.addEventListener('click', handleSubmitForm);
formElement.addEventListener('click', handleCancelModal);
titleModalElement.addEventListener('focus', handleFocusTitleModal);
