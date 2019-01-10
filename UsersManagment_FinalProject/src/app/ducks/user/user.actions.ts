import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { User } from 'src/app/models/user';

export enum UserActionTypes {
 LOAD_USERS   = '[USERS] Load',
 SET_USERS='[USERS] Set',
 ADD_USER='[USER] ADD',
 UPDATE_USER='[USER] UPDATE',
 DELETE_USER='[USER] DELETE',
 CHOOSE_CURRENT_USER='[USER] CHOOSE'
}
export class LoadUsers implements Action {
    readonly type = UserActionTypes.LOAD_USERS
     constructor() {}
}
 
export class SetUsers implements Action {
    readonly type = UserActionTypes.SET_USERS

    constructor(public payload: User[]) {}
}

export class AddUser implements Action {
    readonly type = UserActionTypes.ADD_USER

    constructor(public payload: User) {}
}

export class UpdateUser implements Action {
    readonly type = UserActionTypes.UPDATE_USER

    constructor(public payload: User) {}
}
export class DeleteUser implements Action {
    readonly type = UserActionTypes.DELETE_USER

    constructor(public payload: number) {}
}

export class ChooseUser implements Action {
    readonly type = UserActionTypes.CHOOSE_CURRENT_USER

    constructor(public payload: number) {}
}

export type Actions =LoadUsers |  SetUsers |AddUser|UpdateUser |DeleteUser |ChooseUser