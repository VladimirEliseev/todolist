import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoQuery } from '../store/todo.query';
import { TodoService } from '../store/todo.servise';
import { Todo } from '../store/todo.store';
import { TodoFilter } from './todos/todos.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  todos$: Observable<Todo[]>;
  activeFilter$: Observable<TodoFilter>;
  filters: TodoFilter[]

  constructor(private todoQuery: TodoQuery,
    private todosService: TodoService) {
  }

  ngOnInit() {
    this.todos$ = this.todoQuery.selectVisibleTodos$;
    this.activeFilter$ = this.todoQuery.selectVisibleFilter$;
  }

  complete(todo: Todo) {
    this.todosService.complete(todo);
  }

  delete(id: string) {
    this.todosService.delete(id);
  }

  changeFilter(filter: TodoFilter) {
    this.todosService.updateFilter(filter.filter);
  }
}