import { startClock} from './clock.js';
import { $, $$ } from './helpers.js';
import {
  handleSubmitForm,
  handleDeleteAllTodo,
  handleClickDeleteTodo,
  handleCancelModal,
  handleAddNewTodo,
  handleBeforeUnload,
  handleClickEditTodo
} from './handlers.js';

import {dataDone, dataProgress, dataTodo} from './storage';
import { render } from './compositions';

startClock();
const mainElement = $('.main');
const listTodoElement = $('#list-todo');
const listProgressElement = $('#list-progress');
const listDoneElement = $('#list-done');
const buttonAddElement = $('#buttonAddTodo');
const buttonDeleteAllElement = $('#buttonDeleteAll');
const formElement = $('#form-todo');
const buttonCancelModalElement = $('#button-cancel-modal');
const titleModalElement = $('#title')

render(listTodoElement, dataTodo);
render(listProgressElement, dataProgress);
render(listDoneElement, dataDone);


window.addEventListener('beforeunload', handleBeforeUnload);
buttonAddElement.addEventListener('click', handleAddNewTodo);
buttonCancelModalElement.addEventListener('click', handleCancelModal);
formElement.addEventListener('click', handleSubmitForm);
buttonDeleteAllElement.addEventListener('click', handleDeleteAllTodo);
mainElement.addEventListener('click', handleClickDeleteTodo);
mainElement.addEventListener('click', handleClickEditTodo);
titleModalElement.addEventListener('focus', () => { return titleModalElement.value = ''});

