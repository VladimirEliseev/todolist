import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/store/todo.store';
export type TodoFilter = {
  filter: string;
};
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {
  @Input() todos: Todo[];
  @Input() todo: Todo;
  @Output() complete = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<string>();
  @Output() onCreate: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
  }

  change(completed: boolean, todo: Todo) {
    this.complete.emit({ ...todo, completed });
  }
  onDelete(id: string){
    this.delete.emit(id);
  }
  trackByFn(index: number, todo: Todo) {
    return todo.id;
  }
}
