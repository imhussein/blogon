import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import Post from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: AngularFireList<Post>;
  constructor(
    public afDB: AngularFireDatabase,
  ) { 
    this.posts = this.afDB.list('/posts') as AngularFireList<Post>;
  }

  // Get Posts
  getPosts(){
    return this.posts as AngularFireList<Post>;
  }

  // Get Post
  getPost(id: string){
    return this.afDB.object(`/posts/${id}`) as AngularFireObject<Post>;
  }

  // Add Post
  addPost(post: Post){
    this.posts.push(<Post> post);
  }

  // Update Posts
  updatePost( id: string, post: any){
    this.posts.update(<string> id, <any>post);
  }

  // Get Slides
  getSlides(numberOfSlides: number){
    return this.afDB.list('/posts', ref => {
      return ref.limitToFirst(<number>numberOfSlides);
    }) as AngularFireList<Post>;
  }

  // Delet Post
  deletePost(id: string){
    this.posts.remove(<string> id);
  }
}
