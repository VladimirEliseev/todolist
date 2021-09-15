import { Injectable } from "@angular/core";
import { guid } from "@datorama/akita";
import {Todo, TodoStore } from "./todo.store";

export function createTodo( name: string){
  return{
    id: guid(),
    name,
    completed : false
  }
} 
@Injectable({ providedIn: "root" })
export class TodoService{
  constructor(private todoStore: TodoStore){}

  updateFilter(filter: string) {
    this.todoStore.update({
      ui: {
        filter
      }
    });
  }
  add(name: string){
    const todo=createTodo(name);
    this.todoStore.add(todo);
    console.log(this.todoStore);
  }
  complete({ id, completed }: Todo) {
    this.todoStore.update(id, {completed } );
    
  }
  delete(id: string) {
    this.todoStore.remove(id);
  }
}