import { Component, OnInit, Input,Output , EventEmitter} from '@angular/core';
import {Todo} from '../../../models/todo'
import {TodoState} from '../../../ducks/todo/todo.state'
import {Store} from '@ngrx/store'
import {UpdateTodoCompleted} from '../../../ducks/todo/todo.actions'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
@Input() todo:Todo;
 
  constructor(private todoStore:Store<TodoState>) { }

  ngOnInit() {
  }


  updateCompleted(){
    this.todo.completed=true;
    this.todoStore.dispatch(new UpdateTodoCompleted(this.todo));
    
  }
}
