import { Injectable } from "@angular/core";
import { QueryEntity } from "@datorama/akita"
import { combineLatest } from "rxjs";
import { tap } from "rxjs/operators";
import { TodoFilter } from "../page/todos/todos.component";
import { Todo, TodoStateFilter, TodoStore } from "./todo.store"
@Injectable({
  providedIn: 'root'
})
export class TodoQuery extends QueryEntity<TodoStateFilter>{
  selectVisibleFilter$ = this.select(state => state.ui)
  selectVisibleTodos$ = combineLatest(
    this.selectVisibleFilter$,
    this.selectAll(),
    this.getVisibleTodos
  )
  constructor(public todoStore: TodoStore) {
    super(todoStore);
  }
  private getVisibleTodos(filter: TodoFilter, todo: Todo[]): Todo[] {
    switch (filter.filter) {
      case 'Completed':
        return todo.filter(t => t.completed);
      case 'Active':
        return todo.filter(t => !t.completed);
      default:
        return todo;
    }
  }

}