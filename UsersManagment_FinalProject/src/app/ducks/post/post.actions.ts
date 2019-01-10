import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import {  Post} from 'src/app/models/post';

export enum PostActionTypes {
 LOAD_POSTS   = '[POSTS] Load',
 SET_POSTS='[POSTS] Set',
 ADD_POST='[POST] ADD',
 DELETE_POST='[POST] DELETE'
}
export class LoadPosts implements Action {
    readonly type = PostActionTypes.LOAD_POSTS
     constructor(public payload:number) {}
}
 
export class SetPosts implements Action {
    readonly type = PostActionTypes.SET_POSTS

    constructor(public payload: Post[]) {}
}

export class AddPost implements Action {
    readonly type = PostActionTypes.ADD_POST

    constructor(public payload: Post) {}
}

export class DeletePost implements Action {
    readonly type = PostActionTypes.DELETE_POST

    constructor(public payload: number) {}
}
 

export type Actions =LoadPosts |  SetPosts |AddPost  |DeletePost

