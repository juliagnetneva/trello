import { templateDisableOption, templateOption } from './templates';

function getUsers(element) {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      let options = '';
      data.forEach((item) => {
        options += templateOption(item);
      });
      element.innerHTML = templateDisableOption + options;
    });
}

function getUsersEdit(element) {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      let options = '';
      data.forEach((item) => {
        options += templateOption(item);
      });
      element.innerHTML = options;
    });
}

export { getUsers, getUsersEdit };
