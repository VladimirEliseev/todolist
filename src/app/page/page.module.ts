import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { FilterTodoComponent } from './filter-todo/filter-todo.component';
import { PageComponent } from './page.component';
import { TodosComponent } from './todos/todos.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { TodoService } from '../store/todo.servise';

@NgModule({
  declarations: [
    PageComponent,
    TodosComponent,
    CreateTodoComponent,
    FilterTodoComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    DropdownModule,
    RouterModule.forChild([
      { path: '', component: PageComponent }

    ])
  ],
  exports: [RouterModule],
  providers: [TodoService],
  bootstrap: [PageComponent]
})
export class PageModule { }
