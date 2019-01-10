import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page/main-page.component';
import { UserBasicComponent } from './components/user/user-basic/user-basic.component';
import { UsersListComponent } from './components/user/users-list/users-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer as usersReducer } from './ducks/user/user.reducer';
import { UserEffects } from './ducks/user/user.effects';
import { reducer as todoReducer, newTodo } from './ducks/todo/todo.reducer';
import { TodoEffects } from './ducks/todo/todo.effects';
import { reducer as postReducer, newPost } from './ducks/post/post.reducer';
import { PostEffects } from './ducks/post/post.effects';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule , MatInputModule } from '@angular/material';
import { UserComponent } from './components/user/user/user.component';
import { UserButtonsComponent } from './components/user/user-buttons/user-buttons.component';
import { UserMoreDetailsComponent } from './components/user/user-more-details/user-more-details.component';
import { NewUserComponent } from './components/user/new-user/new-user.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TodosListComponent } from './components/todo/todos-list/todos-list.component';
import { TodoComponent } from './components/todo/todo/todo.component';
import { NewTodoComponent } from './components/todo/new-todo/new-todo.component';
import { DataUserMainPageComponent } from './components/main-page/data-user-main-page/data-user-main-page.component';
import { TodoMainComponent } from './components/todo/todo-main/todo-main.component';
import { ButtonsAddComponent } from './dumbComponents/buttons-add/buttons-add.component';
import { PostMainComponent } from './components/post/post-main/post-main.component';
import { PostComponent } from './components/post/post/post.component';
import { NewPostComponent } from './components/post/new-post/new-post.component';
import { PostsListComponent } from './components/post/posts-list/posts-list.component';

export const routes: Routes = [
    // { path: '', component: null },
  { path: 'newUser', component:  NewUserComponent } ,
 { path:'dataUser/:userId' , component:DataUserMainPageComponent}//,children:
// // [
// //   { path: 'todoList/:userId', component:  TodosListComponent } ,
// //   { path: 'newTodo/:userId', component:  NewTodoComponent } ,
// //   { path: 'postList/:userId', component:  PostsListComponent } ,
// //   { path: 'newPost/:userId', component:  NewPostComponent } 
// // ]
// }
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    UserBasicComponent,
    UsersListComponent,
    UserComponent,
    UserButtonsComponent,
    UserMoreDetailsComponent,
    NewUserComponent,
    TodosListComponent,
    TodoComponent,
    NewTodoComponent,
    DataUserMainPageComponent,
    TodoMainComponent,
    ButtonsAddComponent,
    PostMainComponent,
    PostComponent,
    NewPostComponent,
    PostsListComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    StoreModule.forRoot({
        users: usersReducer,
        todos:todoReducer,
        posts:postReducer
     }),
     EffectsModule.forRoot([UserEffects, TodoEffects,PostEffects]),
     HttpClientModule,
     FormsModule,
     MatInputModule,
     RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
