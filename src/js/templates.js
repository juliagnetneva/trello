const templateTodo = ({ title, text, createdAt, user, id, selected }) => {
  return `
    <div class="item" id="${id}">
       <div class="item__top">
          <select class="item__top__select" data-action="select">
                  <option value="todo" ${(selected == 'todo') ? 'selected' : ''}>TODO</option>
                  <option value="progress" ${(selected == 'progress') ? 'selected' : ''}>IN PROGRESS</option>
                  <option value="done" ${(selected == 'done') ? 'selected' : ''}>DONE</option>
          </select>
          <button class="item__top__edit" data-action="edit">Edit</button>
          <button class="item__top__close" data-action="delete">Delete</button>
       </div>
       <div class="item__title">${title}</div>
       <div class="item__description">${text}</div>
       <div class="item__bottom">
          <div class="item__bottom__user">${user}</div>
          <div class="item__bottom__time">${createdAt}</div>
       </div>
    </div>
`
}

export { templateTodo }
