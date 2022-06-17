import { buildDate} from "./clock.js";

function Todo () {
 // this.text = content.trim() ? content : '';
  this.createdAt = buildDate(new Date());
  this.id = new Date().getTime(); // seconds
//  this.isChecked = false;
}

  const templateTodo = (item) => {
  return `
    <div class="item">
       <div class="item__top">
          <select class="item__top__select " aria-label="Default select example">
                  <option selected>TODO</option>
                  <option value="1">IN PROGRESS</option>
                  <option value="2">DONE</option>
          </select>
          <button class="item__top__edit">Edit</button>
          <button class="item__top__close">Delete</button>
       </div>
       <div class="item__title">Read book</div>
       <div class="item__description">Take some book from the library and raed at least one of them until end of the week.</div>
       <div class="item__bottom">
          <div class="item__bottom__user">Misha</div>
          <div class="item__bottom__time">08:00</div>
       </div>
    </div>
`
}

// let value //значение будет из textArea помещено в value и выводить элементом списка
// textarea.addEventListener('input', (event) => {
//    value = event.target.value }
export { Todo, templateTodo }
