import { Component, OnInit , Input} from '@angular/core';
import {User} from '../../../models/user'
import {UserState} from '../../../ducks/user/user.state'
import {Store} from '@ngrx/store'
import {AddUser} from '../../../ducks/user/user.actions'

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
   user:User=new User();

  constructor(private userStore:Store<UserState>) { }

  ngOnInit() {
  }

  addUser()
  { 
   
        this.userStore.dispatch(new AddUser(this.user));
        this.user=new User();
 
  }

 
}
