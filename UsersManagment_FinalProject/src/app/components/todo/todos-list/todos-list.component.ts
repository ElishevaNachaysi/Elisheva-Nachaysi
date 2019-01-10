import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import {TodoState} from '../../../ducks/todo/todo.state'
import {Store} from '@ngrx/store'
import {LoadTodos} from '../../../ducks/todo/todo.actions'
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {
todos:Todo[];
userId:number;
  constructor(private todoStore:Store<TodoState>, private router:ActivatedRoute) { }

  ngOnInit() {
this.router.params.subscribe(
  params=>{
    this.userId=params["userId"];
     this.todoStore.dispatch(new LoadTodos(this.userId));
    this.todoStore.select('todos').subscribe(
      data =>{
        this.todos=data.filter(x=>x.userId==this.userId);
      }
    );
  });
  }

}
