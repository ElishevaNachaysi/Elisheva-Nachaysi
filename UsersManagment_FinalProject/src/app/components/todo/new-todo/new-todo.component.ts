import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import {Todo} from '../../../models/todo'
import {TodoState} from '../../../ducks/todo/todo.state'
import {Store} from '@ngrx/store'
import {AddTodo, LoadTodos} from '../../../ducks/todo/todo.actions'
import {ActivatedRoute, Router} from '@angular/router'
 

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
  todo:Todo ;
  userId:number;
  @Output() afterAdd:EventEmitter<string>=new EventEmitter();
  constructor(private todoStore:Store<TodoState>,  private activatedRouter:ActivatedRoute,public router: Router,) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe(
      params=>{
        this.userId=params["userId"]
       this.todo=new Todo(params["userId"])
      });
  }

  addTodo()
  { 
    
        this.todoStore.dispatch(new AddTodo(this.todo));
        this.todo=new Todo(this.userId);
        this.afterAdd.emit(null);
     
 
  }

  cancel()
  {
     
    this.afterAdd.emit(null);
   
  }

}
