import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export type Todo={
  id: string;
  name: string;
  completed: boolean;
}
export interface TodoStateFilter extends EntityState<Todo, string>{
  ui: {filter: string}
}


const initialState={
  ui: 
    {filter: 'All'}
  }
@Injectable({
  providedIn: 'root'
})
@StoreConfig ({name: 'todo'})
export class TodoStore extends EntityStore<TodoStateFilter>{
  constructor(){
    super(initialState)
  }
}