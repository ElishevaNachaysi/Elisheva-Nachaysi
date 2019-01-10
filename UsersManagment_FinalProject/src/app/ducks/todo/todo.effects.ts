import { Injectable } from '@angular/core';
import { Actions, Effect,ofType } from '@ngrx/effects';
import {HttpClient}  from '@angular/common/http'
import {TodoActionTypes, SetTodos} from './todo.actions'
 import {map , switchMap} from 'rxjs/operators'; 
 import {TodoService} from '../../services/todo.service'
import { Action } from 'rxjs/internal/scheduler/Action';
import { Observable } from "rxjs/observable";
import { User } from 'src/app/models/user';
import { Todo } from 'src/app/models/todo';

 

@Injectable()
export class TodoEffects {

  constructor(private actions$: Actions ,  private _HttpClient: HttpClient,private _TodoService:TodoService ) {}

  @Effect()
  LoadTodos$: Observable<any> = this.actions$.pipe(
    ofType(TodoActionTypes.LOAD_TODOS),
    switchMap((action:any)  => {
      return this._TodoService.getTodos() 
        .pipe(
          map((data) => {
         debugger;
            return new SetTodos((data as Todo[]));
          })
        )
    })
  );


}
