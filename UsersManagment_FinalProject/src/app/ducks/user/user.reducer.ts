
import * as UserActions from './user.actions'
 import {User} from '../../models/user'
 
export function reducer(state: User[]  = [], action: UserActions.Actions) {

 
    switch(action.type) {
      
         case UserActions.UserActionTypes.SET_USERS:
       
            return   action.payload; 
         case UserActions.UserActionTypes.ADD_USER:
             
            return newUser(state,action.payload);

            case UserActions.UserActionTypes.DELETE_USER:
          
            return state.filter((data) => data.id !==  action.payload );  
            case UserActions.UserActionTypes.UPDATE_USER:
           
            return  updateUser(state,action.payload);
 
            // case UserActions.UserActionTypes.CHOOSE_CURRENT_USER:
            // return  updateUser(state,action.payload);
        default:
            return state;
     
    }



}


export function newUser(state:User[],user:User)
{
    let id=  Math.max.apply(Math, state.map(function(u) { return u.id; }))
  
             user.id=id+1;
             return [...state, user];
}

export function updateUser(state:User[],user:User)
{
    let index = state.map(review => review.id).indexOf(user.id);
    state[index]= user;
    return  state;
}
 
 




