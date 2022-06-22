function templateTodo({
  title, text, createdAt, user, id, selected, priority,
}) {
  const priorityStyle = (priority === 'Low') ? 'green-prior' : (priority === 'Medium' ? 'orange-prior' : (priority === 'High' ? 'red-prior' : ''));

  return `
    <div class="item" id="${id}">
       <div class="item__top">
          <select class="item__top__select" data-action="select">
                  <option value="todo" ${(selected === 'todo') ? 'selected' : ''}>TODO</option>
                  <option value="progress" ${(selected === 'progress') ? 'selected' : ''}>IN PROGRESS</option>
                  <option value="done" ${(selected === 'done') ? 'selected' : ''}>DONE</option>
          </select>
          <button class="item__top__edit" data-action="edit">Edit</button>
          <button class="item__top__close" data-action="delete">Delete</button>
       </div>
       <div class="item__title">${title}</div>
       <div class="item__description">${text}</div>
       <div class="item__priority ${priorityStyle}">Priority ${priority}</div>
       <div class="item__bottom">
          <div class="item__bottom__user">${user}</div>
          <div class="item__bottom__time">${createdAt}</div>
       </div>
    </div>
`;
}

function templateOption({ username }) {
  return `
  <option value="${username}">${username}</option>
  `;
}

const templateDisableOption = '<option selected disabled value="">Select User</option>';

export { templateTodo, templateOption, templateDisableOption };
