import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Todo} from '../models/todo'
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(public _HttpClient:HttpClient) { }


  getTodos():any
  {
   return this._HttpClient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }


}
