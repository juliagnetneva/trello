import { startClock} from './clock.js';
import { $} from './helpers.js';
import {
  handleSubmitForm,
  handleDeleteAllTodo,
  handleClickDeleteTodo,
  handleCancelModal,
  handleAddNewTodo,
  handleBeforeUnload,
  handleClickEditTodo,
  handleFocusTitleModal
} from './handlers.js';

import { renderLists } from './compositions';

startClock();
const mainElement = $('.main');
const formElement = $('#form-todo');
const titleModalElement = $('#title')

renderLists();

window.addEventListener('beforeunload', handleBeforeUnload);
mainElement.addEventListener('click', handleAddNewTodo);
mainElement.addEventListener('click', handleClickDeleteTodo);
mainElement.addEventListener('click', handleClickEditTodo);
mainElement.addEventListener('click', handleDeleteAllTodo);
formElement.addEventListener('click', handleSubmitForm);
formElement.addEventListener('click', handleCancelModal);
titleModalElement.addEventListener('focus', handleFocusTitleModal);

