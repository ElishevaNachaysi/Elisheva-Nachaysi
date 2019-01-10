import { Injectable } from '@angular/core';
import { Actions, Effect,ofType } from '@ngrx/effects';
import {HttpClient}  from '@angular/common/http'
import {UserActionTypes, SetUsers} from './user.actions'
 import {map , switchMap} from 'rxjs/operators'; 
 import {UserService} from '../../services/user.service'
import { Action } from 'rxjs/internal/scheduler/Action';
import { Observable } from "rxjs/observable";
import { User } from 'src/app/models/user';

 

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions ,  private _HttpClient: HttpClient,private _UserService:UserService ) {}

  @Effect()
  LoadUsers$: Observable<any> = this.actions$.pipe(
    ofType(UserActionTypes.LOAD_USERS),
    switchMap((action:any)  => { 
      return this._UserService.getUsers() 
        .pipe(
          map((data) => {
           
            return new SetUsers(data as User[]);
          })
        )
    })
  );


}
