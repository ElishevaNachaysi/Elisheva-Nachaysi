import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public _HttpClient:HttpClient) { }

  
  getUsers():any
  {
   return this._HttpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }


}
