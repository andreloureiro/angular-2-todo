import {Component, Template, Foreach, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'todo-app'
})
@Template({
  url: 'todo-app.html',
  directives: [Foreach]
})

class TodoAppComponent {
  title:string;
  list:Array<string>;

  constructor() {
    this.title = 'Todo List';
    this.list = [];
  }

  add(item) {
    this.list.push(item.value);
    item.value = '';
    item.focus();
  }

  remove(item) {
    let i = this.list.indexOf(item);
    this.list.splice(i, 1);
  }
}

bootstrap(TodoAppComponent);
