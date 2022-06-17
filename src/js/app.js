import { startClock} from './clock.js';
import { $, $$ } from './helpers.js';
import {
  handleSubmitForm,
  handleEditTodo,
  handleDeleteAllTodo,
  handleDeleteTodo,
  handleCancelModal,
  handleAddNewTodo
} from './handlers.js';
import {dataDone, dataProgress, dataTodo} from './storage';
import { render } from './compositions';


startClock();

const listsElements = $$('.main__block__list')

const listTodoElement = $('#list-todo');
const listProgressElement = $('#list-progress');
const listDoneElement = $('#list-done');

const buttonDeleteElement = $('#buttonDeleteTodo');
const buttonEditElement = $('#buttonEditTodo');
const buttonAddElement = $('#buttonAddTodo');
const buttonDeleteAllElement = $('#buttonDeleteAll');


const formElement = $('#form-todo');
const buttonCancelModalElement = $('#button-cancel-modal');
const buttonSaveModalElement = $('#button-confirm-modal');

buttonAddElement.addEventListener('click', handleAddNewTodo)

buttonCancelModalElement.addEventListener('click', handleCancelModal)

formElement.addEventListener('click', handleSubmitForm);

buttonDeleteAllElement.addEventListener('click', handleDeleteAllTodo);

//buttonEditElement.addEventListener('click', handleEditTodo);
//buttonDeleteElement.addEventListener('click', handleDeleteTodo);

render(listTodoElement, dataTodo);
render(listProgressElement, dataProgress);
render(listDoneElement, dataDone);






