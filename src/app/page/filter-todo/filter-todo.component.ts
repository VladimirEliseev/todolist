import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodoFilter } from '../todos/todos.component';

export const initialFilters: TodoFilter[] = [
  { filter: 'All' },
  { filter: 'Completed' },
  { filter: 'Active' }
];

@Component({
  selector: 'app-filter-todo',
  templateUrl: './filter-todo.component.html',
  styleUrls: ['./filter-todo.component.scss']
})


export class FilterTodoComponent implements OnInit {
  @Input() active: TodoFilter;
  filters: TodoFilter[] = initialFilters;
  @Output() update = new EventEmitter<TodoFilter>();
  control: FormControl;
  constructor() { }
  ngOnInit() {
    this.control = new FormControl(this.active);

    this.control.valueChanges.subscribe(c => {
      this.update.emit(c);
    });
  }

}
