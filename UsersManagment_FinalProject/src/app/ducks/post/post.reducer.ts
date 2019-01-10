
import * as PostActions from './post.actions'
 
import { Post } from 'src/app/models/post';
 
 
export function reducer(state: Post[]  = [], action: PostActions.Actions) {

 
    switch(action.type) {
      
        case PostActions.PostActionTypes.SET_POSTS:
       if (state.length != 0) return state;
            return  action.payload; 
         case PostActions.PostActionTypes.ADD_POST:
            return newPost(state,action.payload);
            case PostActions.PostActionTypes.DELETE_POST:
          debugger;
            return state.filter((data) => data.userId !==  action.payload );  
        default:
            return state;
     
    }



}


export function newPost(state:Post[],post:Post)
{
             let id=  Math.max.apply(Math, state.map(function(u) { return u.id; }))
  
             post.id=id+1;
             return [...state, post];
}

 
 




