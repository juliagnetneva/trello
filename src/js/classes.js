import { buildDate } from './clock.js';

class Todo {
  constructor(title, content, user, priority) {
    this.title = title.trim() ? title : '';
    this.text = content.trim() ? content : '';
    this.id = new Date().getTime();
    this.createdAt = buildDate(new Date());
    this.user = user;
    this.selected = 'todo';
    this.priority = priority;
  }
}

export { Todo };
