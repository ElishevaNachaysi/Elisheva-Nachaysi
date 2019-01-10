import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import {PostState} from '../../../ducks/post/post.state'
import {Store} from '@ngrx/store'
import {LoadPosts} from '../../../ducks/post/post.actions'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts:Post[];
  userId:number;
    constructor(private postStore:Store<PostState>, private router:ActivatedRoute) { }
  
    ngOnInit() {
  this.router.params.subscribe(
    params=>{
      this.userId=params["userId"];
       this.postStore.dispatch(new LoadPosts(this.userId));
      this.postStore.select('posts').subscribe(
        data =>{
          this.posts=data.filter(x=>x.userId==this.userId);
        }
      );
    });
    }

}
