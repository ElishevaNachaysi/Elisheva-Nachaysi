import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-basic',
  templateUrl: './user-basic.component.html',
  styleUrls: ['./user-basic.component.scss']
})
export class UserBasicComponent implements OnInit {
@Input() user:User;
@Output() saveData = new EventEmitter<User>()
  constructor() { }

  ngOnInit() {
  }

}
