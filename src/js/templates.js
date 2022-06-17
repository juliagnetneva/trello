const templateTodo = ({ title, text, createdAt, selected, user }) => {
  return `
    <div class="item">
       <div class="item__top">
          <select class="item__top__select " id="select-status">
                  <option value="todo">TODO</option>
                  <option value="progress">IN PROGRESS</option>
                  <option value="done">DONE</option>
          </select>
          <button class="item__top__edit">Edit</button>
          <button class="item__top__close">Delete</button>
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
