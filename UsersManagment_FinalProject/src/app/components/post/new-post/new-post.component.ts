import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import {Post} from '../../../models/post'
import {PostState} from '../../../ducks/post/post.state'
import {AddPost} from '../../../ducks/post/post.actions'
import {ActivatedRoute, Router} from '@angular/router'
import {Store} from '@ngrx/store'
 
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  post:Post ;
  userId:number;
  @Output() afterAdd:EventEmitter<string>=new EventEmitter();
 
  constructor(private postStore:Store<PostState>,  private activatedRouter:ActivatedRoute,public router: Router,) { }


  ngOnInit() {
    this.activatedRouter.params.subscribe(
      params=>{
        this.userId=params["userId"]
        this.post=new Post(params["userId"])
        
      });
  }


  cancel()
  {
     
    this.afterAdd.emit(null);
   
  }

  addPost()
  { 
    
        this.postStore.dispatch(new AddPost(this.post));
        this.post=new Post(this.userId);
 
        this.afterAdd.emit(null);
    

  }

}
