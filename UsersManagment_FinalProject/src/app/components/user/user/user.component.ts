import { Component, OnInit , Input , Output, EventEmitter} from '@angular/core';
import {User} from '../../../models/user'
import {Store} from '@ngrx/store'
import {UserState} from '../../../ducks/user/user.state'
import {DeleteUser, UpdateUser} from '../../../ducks/user/user.actions'

import {TodoState} from '../../../ducks/todo/todo.state'
import {DeleteTodo} from '../../../ducks/todo/todo.actions'

import {PostState} from '../../../ducks/post/post.state'
import {DeletePost} from '../../../ducks/post/post.actions'
import {ActivatedRoute, Router} from '@angular/router'
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {LoadTodos} from '../../../ducks/todo/todo.actions'
import {Todo} from '../../../models/todo'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user:User;
  @Output() chooseUser: EventEmitter<number> =new EventEmitter();
  showOtherData:boolean=false;
  users:User[];
  boldDiv:boolean=false;
  constructor(private userStore:Store<UserState>, 
    private todoStore:Store<TodoState>,private postStore:Store<PostState>,
    private router: Router, private _activatedRoute:ActivatedRoute, private location: Location) { }

  ngOnInit() {
 this.todoStore.dispatch(new LoadTodos(this.user.id));  
 this.todoStore.select('todos').subscribe(
  data =>{
    debugger;
    this.user.isComplete=(data.filter(x=>x.completed==false && x.userId==this.user.id).length==0)
  });
  }

  getData()
  {
  this.chooseUser.emit(this.user.id);

  }




  deleteUser()
  {
    this.userStore.dispatch(new DeleteUser(this.user.id));
    this.todoStore.dispatch(new DeleteTodo(this.user.id));
    this.postStore.dispatch(new DeletePost(this.user.id));
    this.router.navigate(['/']);
  }

  updateUser()
  {
   
    this.userStore.dispatch(new UpdateUser(this.user));
  }

}
