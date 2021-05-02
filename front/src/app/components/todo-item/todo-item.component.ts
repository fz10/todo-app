import { TodoService } from './../../services/todo.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = new Todo();

  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();


  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  // set Dynamic Classes
  setClasses(): object {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed
    };
    return classes;
  }

  onToggle(todo: Todo): void {
    // Toggle in UI
    todo.completed = !todo.completed;
    // Toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  onDelete(todo: Todo): void {
    this.deleteTodo.emit(todo);
  }

}
