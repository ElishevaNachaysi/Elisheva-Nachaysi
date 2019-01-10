import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-more-details',
  templateUrl: './user-more-details.component.html',
  styleUrls: ['./user-more-details.component.scss']
})
export class UserMoreDetailsComponent implements OnInit {

  constructor() { }
@Input() user:User;
  ngOnInit() {
  }

}
