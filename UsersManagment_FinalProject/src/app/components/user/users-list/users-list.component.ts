import { Component, OnInit } from '@angular/core';
import {UserState} from '../../../ducks/user/user.state'
import {Store} from '@ngrx/store'
import {LoadUsers} from '../../../ducks/user/user.actions'
import {User} from '../../../models/user'
import {LoadTodos} from '../../../ducks/todo/todo.actions'
import {Todo} from '../../../models/todo'
import {TodoState} from '../../../ducks/todo/todo.state'
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
users:User[];
allUsers:User[]
isComplete:boolean;
boldUser:boolean=false;
currentUserId:number;
  constructor(private userStore:Store<UserState>, private todoStore:Store<TodoState>) { }

  ngOnInit() {
    this.userStore.dispatch(new LoadUsers());
   
    this.userStore.select('users').subscribe(
      data =>{

        this.allUsers=data;
        this.users= this.allUsers;
       
      }
    );

  }


  setBoldUser(event:number)
  {
  this.currentUserId=event;
  }
  filterUsers(text:string)
  {
    debugger;
    if (text!='')
    this.users=this.allUsers.filter(x=>x.email.toUpperCase().includes(text.toUpperCase()) || x.name.toUpperCase().includes(text.toUpperCase()))
    else
    this.users=this.allUsers
  }


}
