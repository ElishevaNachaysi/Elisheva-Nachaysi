
import * as TodoActions from './todo.actions'
 import {Todo} from '../../models/todo'
 
export function reducer(state: Todo[]  = [], action: TodoActions.Actions) {

 
    switch(action.type) {
      
        case TodoActions.TodoActionTypes.SET_TODOS:
         debugger;
       if (state.length != 0) return state;
            return  action.payload; 
         case TodoActions.TodoActionTypes.ADD_TODO:
             debugger;
            return newTodo(state,action.payload);

            case TodoActions.TodoActionTypes.UPDATE_TODO_COMPLETED:
           
            return  updateTodo(state,action.payload);
            case TodoActions.TodoActionTypes.DELETE_TODO:
          
            return state.filter((data) => data.userId !==  action.payload );  
        default:
            return state;
     
    }



}


export function newTodo(state:Todo[],todo:Todo)
{
             let id=  Math.max.apply(Math, state.map(function(u) { return u.id; }))
  
             todo.id=id+1;
             return [...state, todo];
}

export function updateTodo(state:Todo[],todo:Todo)
{
    let index = state.map(review => review.id).indexOf(todo.id);
    state[index]= todo;
    return  state;
}
 
 




