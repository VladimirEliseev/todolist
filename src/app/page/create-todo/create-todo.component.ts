import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoService } from 'src/app/store/todo.servise';
@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {
  form: FormGroup;
  constructor(private todoService: TodoService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({ name: [''] })
  }
  add(input: HTMLInputElement) {
    this.todoService.add(this.form.value.name);
    input.value = '';
  }

}
