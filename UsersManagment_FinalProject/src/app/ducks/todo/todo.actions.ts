import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Todo } from 'src/app/models/todo';

export enum TodoActionTypes {
 LOAD_TODOS   = '[TODOS] Load',
 SET_TODOS='[TODOS] Set',
 ADD_TODO='[TODO] ADD',
 UPDATE_TODO_COMPLETED='[TODO] UPDATE COMPLETED',
 DELETE_TODO='[TODO] DELETE'
}
export class LoadTodos implements Action {
    readonly type = TodoActionTypes.LOAD_TODOS
     constructor(public payload?:number) {}
}
 
export class SetTodos implements Action {
    readonly type = TodoActionTypes.SET_TODOS

    constructor(public payload: Todo[]) {}
}

export class AddTodo implements Action {
    readonly type = TodoActionTypes.ADD_TODO

    constructor(public payload: Todo) {}
}

export class UpdateTodoCompleted implements Action {
    readonly type = TodoActionTypes.UPDATE_TODO_COMPLETED

    constructor(public payload: Todo) {}
}
 
export class DeleteTodo implements Action {
    readonly type = TodoActionTypes.DELETE_TODO

    constructor(public payload: number) {}
}
export type Actions =LoadTodos |  SetTodos |AddTodo |UpdateTodoCompleted | DeleteTodo
