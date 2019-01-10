import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Post} from '../models/post'
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public _HttpClient:HttpClient) { }

  getPosts():any
  {
   return this._HttpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

}
