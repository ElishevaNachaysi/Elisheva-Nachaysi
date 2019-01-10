import { Injectable } from '@angular/core';
import { Actions, Effect,ofType } from '@ngrx/effects';
import {HttpClient}  from '@angular/common/http'
import {PostActionTypes, SetPosts} from './post.actions'
 import {map , switchMap} from 'rxjs/operators'; 
 import {PostService} from '../../services/post.service'
import { Observable } from "rxjs/observable";
import { Post } from 'src/app/models/post';

 

@Injectable()
export class PostEffects {

  constructor(private actions$: Actions ,  private _HttpClient: HttpClient,private _PostService:PostService ) {}

  @Effect()
  LoadPosts$: Observable<any> = this.actions$.pipe(
    ofType(PostActionTypes.LOAD_POSTS),
    switchMap((action:any)  => {
      return this._PostService.getPosts() 
        .pipe(
          map((data) => {
         debugger;
            return new SetPosts((data as Post[]));
          })
        )
    })
  );


}
